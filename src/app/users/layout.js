import UserFooter from "./components/footer"
import UserHeader from "./components/header"

export default function UserLayout({ children }) {
    return (
        <div>
            <UserHeader />
            {children}
            <UserFooter />
        </div>
    )

}