const patientData = [
    { name: "Emily Williams", age: 18, sex: "Female", img: "emily.png" },
    { name: "Ryan Johnson", age: 45, sex: "Male", img: "ryan.png" },
    { name: "Brandon Mitchell", age: 36, sex: "Male", img: "brandon.png" },
    { name: "Jessica Taylor", age: 28, sex: "Female", img: "jessica.png" },
    { name: "Samantha Johnson", age: 56, sex: "Female", img: "samantha.png" },
    { name: "Ashley Martinez", age: 54, sex: "Female", img: "ashley.png" },
    { name: "Olivia Brown", age: 32, sex: "Female", img: "olivia.png" },
    { name: "Tyler Davis", age: 19, sex: "Male", img: "tyler.png" },
    { name: "Kevin Anderson", age: 30, sex: "Male", img: "kevin.png" },
    { name: "Dylan Thompson", age: 36, sex: "Male", img: "dylan.png" },
    { name: "Nathan Evans", age: 58, sex: "Male", img: "nathan.png" },
    { name: "Mike Nolan", age: 31, sex: "Male", img: "mike.png" },
];

export default function Patients() {
    return (
        <section>
            <div id="patients-background" className="patient-section"></div>
            <span id="patient-header" className="patient-section">Patients</span>
            <img id="magnifying-glass" className="patient-section" src="src/assets/Patients/magnifying-glass.png" alt="search icon" />
            <div id='highlighted-patient'></div>
            {/* Need to add fake scroll bar */}
            <div id='scroll-bar-long'></div>
            <div id='scroll-bar-short'></div>
            {/* Special sauce that renders each new patient 80px below the one above */}
            {patientData.map((patient, i) => {
                const topOffset = 215 + i * 80; // Starting top position + 80px spacing
                return (
                    <section key={i}>
                        <img
                            className="patient-section"
                            src={`src/assets/Patients/${patient.img}`}
                            alt={`${patient.name} profile pic`}
                            style={{ position: 'absolute', top: `${topOffset}px`, left: '38px', width: '48px' }}
                        />
                        <div
                            className="patient-section"
                            id="patient-name"
                            style={{ position: 'absolute', top: `${topOffset + 3}px`, left: '98px', fontWeight: 'bold' }}
                        >
                            {patient.name}
                        </div>
                        <span
                            className="patient-section"
                            id="patient-sex-and-age"
                            style={{ position: 'absolute', top: `${topOffset + 26}px`, left: '98px' }}
                        >
                            {patient.sex}, {patient.age}
                        </span>
                        <img
                            className="patient-section"
                            src="src/assets/Patients/horiz_dots.png"
                            alt="dots"
                            style={{ position: 'absolute', top: `${topOffset + 22}px`, left: '337px', width: '18px' }}
                        />
                    </section>
                );
            })}
        </section>
    );
}
