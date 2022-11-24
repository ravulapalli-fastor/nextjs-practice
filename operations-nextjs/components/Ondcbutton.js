


export default function Ondcbutton({data,color}){
    return(
        <button className="button_ondc" 
         style={{
            color:{color},
            borderLeft:`4px solid ${color}`,
        }}
        >
           {data}
        </button>
    )
}