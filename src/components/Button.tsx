export default ({ text }: { text: string }) => {
    return (
        <button className="bg-secondary px-2 py-1 rounded-md text-white flex place-self-end absolute">
            {text}
        </button>
    );
};
