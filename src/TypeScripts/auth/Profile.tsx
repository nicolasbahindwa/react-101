
export type ProfileProps = {
    name: string
}


export const Profile = ({name}:ProfileProps ) => {
    return (
        <div className="mt-8 ml-4 ">
            <h1 className="text-lg font-bold">Call component as a prop</h1>
            private profile component name is {name}
        </div>
    )
}