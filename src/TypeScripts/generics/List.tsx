
type ListProps<T> = {
    // items : string[] | number[],
    items : T[]
    onclick: (value:T) => void;
    // onclick: (value: string | number) => void;
}


export const List =<T extends {}> ({items, onclick}: ListProps<T>) => {
    return (
        <div className="mt-8 ml-4">
            <h1 className="text-lg font-bold mb-2">Generic props</h1>
            {items.map((item, index) => {
                return(
                    <div key={index} onClick={() => onclick(item)}>
                        {item.last}
                    </div>
                )
            })}
        </div>
    )
}