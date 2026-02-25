import {
  ShoppingBagIcon,
  UserIcon,
} from '@heroicons/react/24/outline';
import { HiOutlineClipboardList } from "react-icons/hi";
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { logout } from '@slices/authSlice';
import { useLogoutMutation } from '@slices/userApiSlice';

import MenuItemMobile from './MenuItemMobile';
import Pages from './Pages';

const MobileMenu = ({ setIsOpen }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { cartItems } = useSelector((state) => state.cart);
  const { userInfo } = useSelector((state) => state.auth);

  const [logoutApiCall] = useLogoutMutation();

  const handleLogout = async () => {
    try {
      await logoutApiCall().unwrap();
      dispatch(logout());
      navigate('/login');
      setIsOpen(false);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <nav className='relative z-10 w-full bg-white sm:max-w-sm overflow-y-auto h-full'>

      {/* Header */}
      <div className='border-b p-4 text-lg font-semibold'>
        Menu
      </div>

      <div className='flex flex-col'>

        {/* PAGES FIRST */}
        <Pages isMobile={true} closeMenu={() => setIsOpen(false)} />

        <div className='border-t my-3' />

        {/* CART */}
        <MenuItemMobile
          url='/cart'
          label={`Cart (${cartItems.length})`}
          icon={ShoppingBagIcon}
          closeMenu={setIsOpen}
        />

        {/* ORDERS */}
        {userInfo && (
          <MenuItemMobile
            url='/orders'
            label='Orders'
            icon={HiOutlineClipboardList}
            closeMenu={setIsOpen}
          />
        )}

        {/* USER SECTION */}
        {!userInfo ? (
          <MenuItemMobile
            url='/login'
            label='Login'
            icon={UserIcon}
            closeMenu={setIsOpen}
          />
        ) : (
          <>
            <MenuItemMobile
              url='/profile'
              label='Profile'
              icon={UserIcon}
              closeMenu={setIsOpen}
            />

            <button
              onClick={handleLogout}
              className='flex items-center gap-3 px-4 py-3 text-left text-gray-700 hover:bg-gray-100 w-full'
            >
              <UserIcon className='h-5 w-5' />
              Logout
            </button>
          </>
        )}

        {/* ADMIN SECTION */}
        {userInfo && userInfo.isAdmin && (
          <>
            <div className='border-t mt-3 pt-3' />
            <p className='px-4 text-xs text-gray-500 uppercase mb-2'>
              Admin
            </p>

            <MenuItemMobile
              url='/admin/orderlist'
              label='All Orders'
              icon={HiOutlineClipboardList}
              closeMenu={setIsOpen}
            />

            <MenuItemMobile
              url='/admin/userlist'
              label='All Users'
              icon={UserIcon}
              closeMenu={setIsOpen}
            />

            <MenuItemMobile
              url='/admin/productlist'
              label='All Products'
              icon={ShoppingBagIcon}
              closeMenu={setIsOpen}
            />
          </>
        )}

      </div>
    </nav>
  );
};

export default MobileMenu;