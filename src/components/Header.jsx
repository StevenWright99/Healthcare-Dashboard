export default function Header() {
    return (
        /* Contains all elements of the navbar at top of page */
        <section>
            {/* Elements for left section */}
            <img id='TechCare-logo' className="navbar-icons" src="/Header/TestLogo.svg" alt="TechCare logo" />
            <nav className='navbar'></nav>

            {/* Elements for middle section */}
            <img id='navbar-middle-icons1' className="navbar-icons" src="/Header/home.png" alt="house icon" />
            <p id='navbar-text-1' className="navbar-text-bold">Overview</p>
            <img id='navbar-middle-icons2' className="navbar-icons" src="/Header/people.png" alt="people icon" />
            <p id='navbar-text-2' className="navbar-text-bold">Patients</p>
            <img id='navbar-middle-icons3' className="navbar-icons" src="/Header/calendar.png" alt="calendar icon" />
            <p id='navbar-text-3' className="navbar-text-bold">Schedule</p>
            <img id='navbar-middle-icons4' className="navbar-icons" src="/Header/chat_bubble.png" alt="message icon" />
            <p id='navbar-text-4' className="navbar-text-bold">Message</p>
            <img id='navbar-middle-icons5' className="navbar-icons" src="/Header/credit_card.png" alt="credit card icon" />
            <p id='navbar-text-5' className="navbar-text-bold">Transactions</p>
            <div id='patients-highlighted' className="navbar-icons"></div>

            {/* Elements for right section */}
            <img id='header-doctor-image' className="navbar-icons" src="/Header/senior-woman-doctor.png" alt="image of doctor" />
            <p id="doctor-title" className="navbar-text-bold">Dr. Jose Simmons</p>
            <p id="doctor-role" className="navbar-text-normal">General Practitioner</p>
            <hr />
            <img id="settings-icon" className="navbar-icons" src="/Header/settings-icon.png" alt="setting icon" />
            <img id="dots-icon" className="navbar-icons" src="/Header/vertical-ellpises-icon.png" alt="vertical-dots" />
        </section>
    )
}
