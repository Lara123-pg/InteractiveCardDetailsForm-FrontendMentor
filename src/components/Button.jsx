export function Button(props) {
    return (
        <button
            type="button"
            className="w-[35%] py-3 mr-14 rounded-lg bg-backgroundButton text-background extra4:w-[300px] ml-32 extra6:ml-36"
            onClick={props.validation}
        >
            {props.name}
        </button>
    );
}