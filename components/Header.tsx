import react, { useContext } from 'react'
import { SearchIcon, HomeIcon, BriefcaseIcon, UsersIcon, BellIcon, ChatAltIcon, ChevronDownIcon, ViewGridIcon } from '@heroicons/react/solid'
import HeaderIcons from './HeaderIcons'
import { logOut } from '../firebase'
import { AuthContext } from '../AppContext';


function Header() {
    const { user } = useContext(AuthContext);
    return (
        <div className='m-3 flex flex-row justify-between '>
            <div className='flex flex-row space-x-2 cursor-pointer' >
                <img
                    src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIUAAACFCAMAAABCBMsOAAAAbFBMVEUCdLP///8AbbCUt9WKsdIAcbIAa6/6/P2sxt4AdrTw9vpBhrw/h7yQs9MAb7EAaa4AZay91OegwNsxfbcAYqvp8ffK3Ori7PQoeLVnmMXW5O8yg7ptosuCrdFjnMjF2OlQjsBXlcR7pMsAW6jRgB21AAADbElEQVR4nO3c23KrIBQGYCAihjRgtGpjczDZ7/+OW2O7dxp+EqcDmGlZF70ojvlGcbHAA6GXEHW2CB9ZLcafJ8MfWZQqZeEjVWUhPxXNSnMyT3D90oyKZjbD6GgGhVzNiegZK9krFnpWBCF6QYl8mxlByJskx3RuBEmPJHsCRUYWbG4EYQuSPIEiiYqoiIrvK7hiTAUY6u4oOFPvu2R/eGNqPkW+yuRYjbXr1LPDpuAs+6gILwXhwW/fsSg4P9IvkXgd8iwKdYOgdO+zFMKKPLtFUNp57BtQwTsTQVuPVyxUpBugoFt/BwMfC4SgdR5UoU5QUS2DKtIFVMjOW89ACg2ukD7E9hcq2FOcEVvv9GWwXKlKIMXGXw6HCgaz1sFf8sRZ6wUggmdwogtTUQZXoJHdZ4ExucrxutJirTtfE3nVJ1Z+l3vs1S8ri2qACNnuuOfZwL2ZgFbd7nzelnrGmcAFwpXyfRweK0JFVPwWhRqX/CdO+a2504gH7deN6Ss5rIusj2J9eM9z9khiUazMKK+al6D585dYui2q6+Qv6qR7kHKwglfSiOL/ZnwpjOZszPGKn1tzPBZ9+r3nsChAsXW1UM2XZvNYiemuAaXJZSg63ZlUOVVwhav3MQp7R3Wp4EtwMq6iJjaGQwUntrPxGe2rd0X+EEGp7VaMO8Ufo0gEYVmYcqbIdhMQVOIa2pmircz/gdjA69WZYmrAgxFcUaCxM7iieYpjQdH6Q3hFBqY24RUtSBnuFbI9bjabWtraq3fzlLhWtLuyr3N0ysuDLaGffCvEXv+r7hRafhhib9Y7ThWy/NLzdAK3Kszu6VSxvdlTXqOtjmYSd6kwxgh+Qst0jVllOFSAB2s0Kr6kV8URnO892E547Rc7sB90u0d4vUZKYzeElKDqEEvjzLlTwMGSoCmSWWK4U9Ro8mWuWPYKM4W7U2SofEF34PwqUHmdosnai0cFLOWCK+ADV8EV66iIiqiIiqiIiqiIiqiIiqiIiqiIiqj4LQopbuNGYbbbFMaWYqriG0+B2B6omrThz34uJyqiIip+pOI53tV9jveW6yc4FjUBd5ACBy8FQbecw4Yuhu8c+HyhbUKobvjOAa38v/t5D8Gq8fsXVTfj9y+64Z7r5VsgIiv5LN8C4eX4BioZS9K5vovyURH/BYAmSkRDCVJ2AAAAAElFTkSuQmCC'
                    className='h-9 w-9'
                    onClick={() => logOut()}
                />

                <div className='flex flex-row space-x-2 bg-blue-50 rounded-md items-center -mt-1'>
                    <SearchIcon className='h-5 w-5 ml-4 text-gray-500' />
                    <input placeholder='Search' className='bg-transparent outline-0 text-sm w-72 text-black-500' />
                </div>
            </div>

            <div className='flex flex-row space-x-5'>
                <HeaderIcons Icon={HomeIcon} title='Home' />
                <HeaderIcons Icon={UsersIcon} title='My Network' />
                <HeaderIcons Icon={BriefcaseIcon} title='Jobs' />
                <HeaderIcons Icon={ChatAltIcon} title='Messaging' />
                <HeaderIcons Icon={BellIcon} title='Notifications' />

                {/* meIcon */}
                <div className='flex flex-col items-center text-xs text-gray-500' >
                    <img src={user.photoURL} className='h-6 w-6 rounded-full' />
                    <div className='flex flex-row items-center'>
                        <p>Me</p>
                        <ChevronDownIcon className='h-5 w-5' />
                    </div>
                </div>

                <div className='ml-24 mr-6 flex flex-col items-center text-xs text-gray-500 border-l-2'>
                    <ViewGridIcon className='h-6 w-6' />
                    <div className='flex flex-row items-center'>
                        <p className='ml-6'>Work</p>
                        <ChevronDownIcon className='h-5 w-5' />
                    </div>
                </div>
            </div>





        </div>
    )
}

export default Header