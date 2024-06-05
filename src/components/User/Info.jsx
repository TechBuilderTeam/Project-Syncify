

const Info = ({ user, profile }) => {

    // for formating date design
    const formatDate = (dateString) => {
        if (!dateString) return "";
        const date = new Date(dateString);
        return date.toLocaleDateString('en-GB', {
            day: '2-digit',
            month: '2-digit',
            year: 'numeric',
        });
    };
    return (
        <div>
            <div className=" py-10 px-10 md:px-20  ">
                <h1 className="text-3xl font-bold">Info</h1>

                <div className="mt-4 text-lg font-bold">
                    <h1 className="my-2">Name:
                        <span className="font-normal"> {user && user.name}</span>
                    </h1>
                    <h1 className="my-2">Email: <span className="font-normal"> {user && user.email}</span></h1>
                    <h1 className="my-2">Joined: <span className="font-normal"> {user && formatDate(profile?.date_joined)}</span></h1>
                </div>
            </div>
        </div>
    );
};

export default Info;