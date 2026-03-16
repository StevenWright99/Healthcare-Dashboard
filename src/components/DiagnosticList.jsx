export default function DiagnosticList(props) {
    console.log(props)
    return (
        <section>
            <div id='diagnostic-list-background'></div>
            <div id="diagnostic-list-header" className="diagnosis-universal">Diagnosic List</div>
            <div id='diagnostic-table-header-background' className="diagnosis-universal"></div>

            {/* Table Header Text */}
            <p id='problem-header' className="diagnostic-table-header">Problem/Diagnosis</p>
            <p id='description-header' className="diagnostic-table-header">Description</p>
            <p id='status-header' className="diagnostic-table-header">Status</p>

            {/* Scroll bar */}
            <div id="diag-bigBar"></div>
            <div id='diag-smallBar'></div>

            {props.diagnosticList.map((item, i) => {
                const topOffset = 985 + i * 57;
                const leftOffset1 = 453;
                const leftOffset2 = 686;
                const leftOffset3 = 1050;

                const topOffsetDivider = 1040 + i * 52;
                const leftOffsetDivider = leftOffset1 - 4;

                return (

                    <div key={i}>
                        <div
                            id='diagnostic-list-problem'
                            className="diagnostic-list-universal"
                            style={{ top: `${topOffset}px`, left: `${leftOffset1}px` }}
                        >
                            {item.name}
                        </div>
                        <div
                            id='diagnostic-list-description'
                            className="diagnostic-list-universal"
                            style={{ top: `${topOffset}px`, left: `${leftOffset2}px` }}
                        >
                            {item.description}
                        </div>
                        <div
                            id='diagnostic-list-status'
                            className="diagnostic-list-universal"
                            style={{ top: `${topOffset}px`, left: `${leftOffset3}px` }}
                        >
                            {item.status}
                        </div>
                        <div
                            id='diagnostic-list-divider'
                            className="diagnostic-list-universal"
                            style={{ top: `${topOffset + 41}px`, left: `${leftOffsetDivider - 7}px` }}></div>
                    </div>
                )
            })}
        </section>
    )
}