import Conversation from "../components/inbox/Conversation";

const InboxPage = () => {
    return (
        <main className="max-w-1500pxl mx-auto px-6 pb-6 space-y-4">
            <h1 className="my-6 text-2xl">InboxPage</h1>

            <Conversation />
            <Conversation />
            <Conversation />
        </main>
    );
}

export default InboxPage;