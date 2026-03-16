export default function LabResults(props){
    console.log(props)

    return(
        <section>
            {/* Lab Results Section */}
            <div id='lab-results-background'></div>
            <div id='lab-results-header'>Lab Results</div>
            <div id='hidden-div'>not so hidden</div>

            {/* Scroll bar */}
            <div id="lab-bigBar"></div>
            <div id='lab-smallBar'></div>

            {props.labResults.map((report, i) =>{
                const topOffset = 959 + i * 45
                const leftOffsetIcon = 1516;
                const leftOffset = 1253;
                return(
                    <section key={i}>
                        <img 
                        className="lab-universal"
                        id='download-icon'
                        src={`src/assets/Lab Results/downloadIcon.png`}
                        alt="download icon" 
                        style={{top: `${topOffset}px`, left:`${leftOffsetIcon}px`}}
                        />
                        <span
                            className="lab-universal"
                            id='lab-reports'
                            style={{top: `${topOffset}px`, left:`${leftOffset}px`}}
                        >
                            {report}
                        </span>
                    </section>
                );
            })}

        </section>
    )
}