const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const fs = require("fs");
const mysql = require("mysql");
const { v4: uuidv4 } = require("uuid");
const md5 = require("md5");

const app = express();
const port = 3003;
app.use(express.json({ limit: "10mb" }));
app.use(express.static("public"));

const con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "baigiamasisdarbas",
});

app.use(
    cors({
        origin: "http://localhost:3000",
        credentials: true,
    })
);
app.use(cookieParser());
app.use(
    express.urlencoded({
        extended: true,
    })
);
app.use(express.json());

const doAuth = function (req, res, next) {
    if (req.url.indexOf("/numbers") === 0) {
        const users = JSON.parse(fs.readFileSync("./data/users.json", "utf8"));
        const user = req.cookies.magicNumberSession
            ? users.find((u) => u.session === req.cookies.magicNumberSession)
            : null;
        if (user && (user.role === "admin" || user.role === "manager")) {
            next();
        } else {
            res.status(401).json({});
        }
    } else if (req.url.indexOf("/users") === 0) {
        const users = JSON.parse(fs.readFileSync("./data/users.json", "utf8"));
        const user = req.cookies.magicNumberSession
            ? users.find((u) => u.session === req.cookies.magicNumberSession)
            : null;
        if (user && user.role === "admin") {
            next();
        } else {
            res.status(401).json({});
        }
    } else {
        next();
    }
};

// app.use(doAuth);
const convertPhoto = (photo) => {
    let type = "unknown";
    let file = null;

    if (photo === null) {
        return [type, file];
    }

    if (photo.indexOf("data:image/png;base64,") === 0) {
        type = "png";
        file = Buffer.from(
            photo.replace("data:image/png;base64,", ""),
            "base64"
        );
    } else if (photo.indexOf("data:image/jpeg;base64,") === 0) {
        type = "jpg";
        file = Buffer.from(
            photo.replace("data:image/jpeg;base64,", ""),
            "base64"
        );
    } else {
        file = Buffer.from(photo, "base64");
    }

    return [type, file];
};

const createPhoto = (photo) => {
    const [type, file] = convertPhoto(photo);

    if (file === null) {
        return null;
    }

    const fileName = uuidv4() + "." + type;
    fs.writeFileSync("./public/img/" + fileName, file);

    return fileName;
};

//*************** STORIES ********************/

app.get("/admin/stories", (req, res) => {
    const sql = `
        SELECT id, title, description, img, start_sum, current_sum, goal_sum
        FROM stories
        ORDER BY title
    `;
    con.query(sql, (err, result) => {
        if (err) throw err;
        res.json({ data: result });
    });
});

app.get("/admin/stories/:id", (req, res) => {
    const sql = `
        SELECT id, title, description, img, start_sum, current_sum, goal_sum
        FROM stories
        WHERE id = ?
    `;
    con.query(sql, [req.params.id], (err, result) => {
        if (err) throw err;
        res.json({ data: result[0] });
    });
});

app.post("/admin/stories", (req, res) => {
    const sql = `
    INSERT INTO stories (title, description, img, start_sum, current_sum, goal_sum)
    VALUES (?, ?, ?, 0, 0, ?)
  `;
    con.query(
        sql,
        [
            req.body.title,
            req.body.description,
            createPhoto(req.body.file),
            req.body.goal_sum,
        ],
        (err) => {
            if (err) {
                console.error(err);
                res.status(500).json({
                    msg: { text: "Error adding new story", type: "error" },
                });
            } else {
                res.json({
                    msg: { text: "New story added", type: "success" },
                });
            }
        }
    );
});

app.delete("/admin/stories/:id", (req, res) => {
    const sql = `
        DELETE FROM stories
        WHERE id = ?
    `;
    con.query(sql, [req.params.id], (err) => {
        if (err) throw err;
        res.json({
            msg: { text: "Story has been deleted", type: "info" },
        });
    });
});
app.put("/admin/stories/:id", (req, res) => {
    const action = req.body.action;
    const id = req.params.id;
    let sql, params;

    if (action === "updateAmount") {
        sql = `
            UPDATE stories
            SET current_sum = current_sum + ?
            WHERE id = ?
        `;
        params = [req.body.amount, id];
    } else if (action === "updateStory") {
        sql = `
            UPDATE stories
            SET title = ?, description = ?, current_sum = ?, goal_sum = ?  
            WHERE id = ?
        `;
        params = [
            req.body.title,
            req.body.description,
            req.body.current_sum,
            req.body.goal_sum,
            id,
        ];
    } else {
        // Handle invalid action
    }

    con.query(sql, params, (err) => {
        if (err) throw err;
        res.json({
            msg: { text: "Sritis pakeista", type: "info" },
        });
    });
});

//*************** LOGIN ********************/

app.post("/login", (req, res) => {
    const sessionId = uuidv4();

    const sql = `
        UPDATE users
        SET session = ?
        WHERE name = ? AND psw = ?
    `;

    con.query(
        sql,
        [sessionId, req.body.name, md5(req.body.psw)],
        (err, result) => {
            if (err) throw err;
            if (result.affectedRows) {
                res.cookie("treesSession", sessionId);
                res.json({
                    status: "ok",
                    name: req.body.name,
                });
            } else {
                res.json({
                    status: "error",
                });
            }
        }
    );
});

app.post("/logout", (req, res) => {
    res.cookie("treesSession", "");
    res.json({
        status: "logout",
    });
});

app.get("/login", (req, res) => {
    const sql = `
        SELECT name
        FROM users
        WHERE session = ?
    `;
    con.query(sql, [req.cookies.treesSession || ""], (err, result) => {
        if (err) throw err;

        if (result.length) {
            res.json({
                status: "ok",
                name: result[0].name,
            });
        } else {
            res.json({
                status: "error",
            });
        }
    });
});

app.listen(port, () => {
    console.log(`Server is on port number: ${port}`);
});
