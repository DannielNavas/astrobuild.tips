interface Props {
    title: string;
}
const Header = ({title}: Props) => {
    return (
        <div className="mx-auto max-w-screen-lg p-4 py-8">
            <h1 className="mb-4">
                <span className="font-extrabold text-4xl bg-clip-text">
                    {title}
                </span>
            </h1>
        </div>
    )
}

export default Header;
