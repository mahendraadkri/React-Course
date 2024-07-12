import React from 'react'

export default function About(props) {

    // const [myStyle, setMyStyle] = useState({
    //         color: 'black',
    //         backgroundColor: 'white'
    //     })
    
    // const toggleStyle = () => {
    //         if(myStyle.color === 'black'){
    //            setMyStyle({
    //             color: 'white',
    //             backgroundColor: 'black',
    //             border: '1px solid white'
    //            }) 
    //            setBtnText("Enable Light Mode")
    //         }
    //         else{
    //             setMyStyle({
    //             color: 'black',
    //             backgroundColor: 'white'
    //             })
    //             setBtnText("Enable Dark Mode")
    //         }
    //     }

    let myStyle = {
        color: props.mode === 'dark' ? 'white' : '#042743',
        backgroundColor: props.mode === 'dark'? 'rgb(36 74 104)' : 'white',
        borderColor: props.mode === 'dark'?  'white' : '#042743',
    }

  return (
    <div className="container" style={myStyle}>
        <h1 className="my-3" style={{color: props.mode === 'dark' ? 'white' : '#042743'}}>About Us</h1>
        <div className="accordion" id="accordionExample" style={myStyle}>
        <div className="accordion-item">
            <h2 className="accordion-header">
            <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne" style={myStyle}>
                <strong>Analyze Your Text</strong>
            </button>
            </h2>
            <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample" style={myStyle}>
            <div className="accordion-body" style={myStyle}>
            TextUtils gives you a way to analyze text quickly and efficiently. Be it word count, character count or
            </div>
        </div>
        </div>
        <div className="accordion-item">
            <h2 className="accordion-header">
            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo" style={myStyle}>
                <strong>Free to use</strong>
            </button>
            </h2>
            <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample" style={myStyle}>
            <div className="accordion-body" style={myStyle}>
                TextUtils is a free character counter tool that provides instant character count & word count statistics for a given text. TextUtils reports the number of words and characters. Thus it is suitable for writing text with word/ character limit.
            </div>
            </div>
        </div>
        <div className="accordion-item">
            <h2 className="accordion-header">
            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree" style={myStyle}>
                <strong>Browser Compatible</strong>
            </button>
            </h2>
            <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample" style={myStyle}>
            <div className="accordion-body" style={myStyle}>
                This word counter software words in any web browsers such as Chrome, Firefox, Safari, Internet Explorer, Opera. It suits to count characters in facebook, blog, books, excel document, pdf documents, essays, etc.
            </div>
            </div>
        </div>
        </div>
    </div>
  )
}
