export default function FormLegend({children}) {
    return (
        <legend className="text-bright1 bg-dark1 px-4 py-2 rounded-md text-sm font-semibold">
            {children}
        </legend>
    );
}
