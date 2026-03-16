export default function Diagnostics(props) {

    const diagnosisData = [
        { icon: "respiratory rate.svg", text: "Respiratory Rate", info: props.diagnosis_history[0].respiratory_rate.value + " bpm", footer: "Normal" },
        { icon: "temperature.svg", text: "Temperature", info: props.diagnosis_history[0].temperature.value + "°F", footer: "Normal" },
        { icon: "HeartBPM.svg", text: "Heart Rate", info: props.diagnosis_history[0].heart_rate.value + " bpm" },
    ]

    return (
        <section>
            <div id='diagnosis-background' className="diagnosis-universal"></div>
            <div id='diagnosis-header' className="diagnosis-universal">Diagnosis History</div>

            {/* Diagnosis Background*/}
            <div id='resp-background' className="diagnosis-mini-backgrounds"></div>

            {/* Chart*/}
            <div id='chart-background'></div>
            <div id='chart-title' className="diagnosis-universal">Blood Pressure</div>

            {/* Temperature Background*/}
            <div id='temp-background' className="diagnosis-mini-backgrounds"></div>

            {/* Heart Rate Background*/}
            <div id='heart-background' className="diagnosis-mini-backgrounds"></div>

            {/* Heart Rate arrow */}
            <img id='heartRate-arrow' className="diagnosis-universal" src="/Diagnostics/ArrowDown.svg" alt="small arrow" />

            <div id='diagnosis-footer-right' className="diagnosis-universal">Lower than Average</div>

            <div id='month-range' className="diagnosis-universal">Last 6 months</div>
            <img id='month-range-arrow' className="diagnosis-universal" src="/Diagnostics/DropdownArrow.svg" alt="dropdown icon" />

            {/* Systolic */}
            <div id='pink-dot' className="diagnosis-universal"></div>
            <div id='systolic-text' className="diagnosis-universal">Systolic</div>
            <div id='systolic-number' className="diagnosis-universal">{props.diagnosis_history[0].blood_pressure.systolic.value}</div>
            <img id='uppies' className="diagnosis-universal" src="/Diagnostics/ArrowUp.svg" alt="up arrow" />
            <div id='systolic-average' className="diagnosis-universal">{props.diagnosis_history[0].blood_pressure.systolic.levels}</div>

            <div id='grey-divider' className="diagnosis-universal"></div>

            {/* Diastolic */}
            <div id='purple-dot' className="diagnosis-universal"></div>
            <div id='diastolic-text' className="diagnosis-universal">Diastolic</div>
            <div id='diastolic-number' className="diagnosis-universal">{props.diagnosis_history[0].blood_pressure.diastolic.value}</div>
            <img id='downies' className="diagnosis-universal" src="/Diagnostics/ArrowDown.svg" alt="" />
            <div id='diastolic-average' className="diagnosis-universal">{props.diagnosis_history[0].blood_pressure.diastolic.levels}</div>

            {diagnosisData.map((sticker, i) => {
                const leftOffset = 453 + i * 249;
                return (
                    <section key={i}>
                        <img
                            className="diagnosis-universal"
                            src={`/Diagnostics/${sticker.icon}`}
                            alt={`${sticker.icon} icon`}
                            style={{ position: "absolute", left: `${leftOffset}px`, top: '549px', width: '96px' }}
                        />
                        <div
                            className="diagnosis-universal"
                            id='diagnosis-text'
                            style={{ position: "absolute", left: `${leftOffset}px`, top: '661px' }}
                        >
                            {sticker.text}
                        </div>
                        <div
                            className="diagnosis-universal"
                            id='diagnosis-info'
                            style={{ position: "absolute", left: `${leftOffset}px`, top: '682px' }}
                        >
                            {sticker.info}
                        </div>
                        <div
                            className="diagnosis-universal"
                            id='diagnosis-footer'
                            style={{ position: "absolute", left: `${leftOffset}px`, top: '740px' }}
                        >
                            {sticker.footer}
                        </div>
                    </section>
                )
            })}
        </section>
    )
}
