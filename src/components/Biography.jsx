export default function Biography(props) {
    console.log(props)

    // converting raw date into correct format
    const rawDate = props.date_of_birth;
    const dateObj = new Date(rawDate);

    const formattedDate = dateObj.toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric"
    });

    const BioData = [
        { icon: "/Biography/BirthIcon.png", header: "Date of Birth", info: formattedDate },
        { icon: "/FemaleIcon.png", header: "Gender", info: props.gender },
        { icon: "/PhoneIcon.png", header: "Contact Info.", info: props.phone_number },
        { icon: "/PhoneIcon.png", header: "Emergency Contacts", info: props.emergency_contact },
        { icon: "/InsuranceIcon.png", header: "Insurance Provider", info: props.insurance_type }
    ]

    return (
        <section>
            <div id='bio-background'></div>
            <div id='bio-show-more-background'></div>
            <div id='bio-show-more-text'>Show All Information</div>

            {/* API call to populate fields - DELETE ANY HARDCODED INFO*/}
            <img id='bio-big-profile' className="bio-universal" src={props.profile_picture} alt="big-profile-pic" />
            <div id='bio-name' className="bio-universal">{props.name}</div>


            {BioData.map((data, i) => {
                const topOffset = 429 + i * 66;
                const leftOffsetIcon = 1236;
                const leftOffsetText = 1294;
                return (
                    <section key={i}>
                        <img
                            className="bio-universal"
                            id='bio-icon'
                            // This needs to be imported
                            src={`src/assets/Biography/${data.icon}`}
                            alt="calendar icon"
                            style={{ top: `${topOffset}px`, left: `${leftOffsetIcon}px` }}
                        />
                        <div
                            className="bio-universal"
                            id='bio-header'
                            style={{ top: `${topOffset}px`, left: `${leftOffsetText}px` }}
                        >
                            {data.header}
                        </div>
                        <div
                            className="bio-universal"
                            id='bio-info'
                            style={{ top: `${topOffset + 23}px`, left: `${leftOffsetText}px` }}
                        >
                            {data.info}

                        </div>
                    </section>
                )

            })}
        </section>
    )
}