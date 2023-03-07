
const picture: React.CSSProperties = {
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    width: '14%',
    borderRadius: '50%',
    padding: '6%',
    marginTop: '10%',
    color: 'rgba(0, 0, 0, 1)',
}

const UserIcon = () => {
    return (
        <svg style={picture} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
        </svg>
    )
}


export default UserIcon;