import CookieMonster from "../components/CookieMonster";
import "../styles/home.scss";

export default function Home() {
    return (
        <div className="home">
            <h1>Come and help me!</h1>
            <h6>Your place for help</h6>
            <CookieMonster />
        </div>
    );
}
