export default function FormFieldset({children}) {
    return (
        <fieldset className="bg-dark1 px-4 py-2 rounded-md text-sm font-semibold flex flex-col gap-1 my-8">
            {children}
        </fieldset>
    );
}