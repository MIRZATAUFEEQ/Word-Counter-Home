import React from 'react'

export default function About(props) {
let mystyle={
    backgroundColor: props.mode === 'dark' ? '#042745' : 'white', 
    color: props.mode === 'dark' ? 'white' : 'black'
}
    return (
        <div class="accordion container" id="accordionExample" >
            <h1 style={mystyle}>About Us</h1>
            <div class="accordion-item">
                <h2 class="accordion-header" id="headingOne">
                    <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                        <strong>Analyze Your text</strong>
                    </button>
                </h2>
                <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                    <div class="accordion-body">
                   Word counter gives you a way to Analyze your text quickly and efficiently. Be it word count, character count
                    </div>
                </div>
            </div>
            <div class="accordion-item">
                <h2 class="accordion-header" id="headingTwo">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                        <strong>Free to use</strong>
                    </button>
                </h2>
                <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                    <div class="accordion-body">
                        word counter is a Free character counter tool that provides instant character count & word count statistics for a given text. word counter reports the number of words and character. thus it is suitable for woriting text with word/ character limit.
                    </div>
                </div>
            </div>
            <div class="accordion-item">
                <h2 class="accordion-header" id="headingThree">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                        <strong>Browser Compatible</strong>
                    </button>
                </h2>
                <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                    <div class="accordion-body">
                        This word counter software works in any web browsers such as chrome, firefox, internet explorer, safari, opera. it suits to count characters in facebook, blog, books, excel document, pdf document, essays, etc. 
                    </div>
                </div>
            </div>
            {/* <div className="container">
                <button onClick={togglestyle} type="button" class="btn btn-dark my-2">{btn}</button>
            </div> */}
        </div>
    )
}
