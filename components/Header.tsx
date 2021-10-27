import {AiFillGithub} from 'react-icons/ai'

function Header() {
    return (
        <div className=' space-x-40 flex flex-row font-bold text-white ' >
            <div className='ml-5' >
                <img className='h-10' src='https://res.cloudinary.com/codegowdacloud/image/upload/v1635327710/image-removebg-preview_jq9vzi.png' ></img>
            </div>
            <h1 className='hover:border-white hover:border-b-2 cursor-pointer' >Meet the team</h1>
            <h1 className='hover:border-white hover:border-b-2 cursor-pointer' >History</h1>
            <h1 className='hover:border-white hover:border-b-2 cursor-pointer' >Our Motive</h1>
            <h1 className='hover:border-white hover:border-b-2 cursor-pointer' >ByteSlash Blog</h1>
            <AiFillGithub/>
        </div>
    )
}

export default Header
