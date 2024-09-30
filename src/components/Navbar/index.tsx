import { AliwangwangOutlined, MenuOutlined } from '@ant-design/icons';

const Navbar = () => {
  return (
    <nav className="flex min-h-12 items-center justify-between bg-gray-900 px-4">
      <AliwangwangOutlined className="cursor-pointer text-3xl text-white" />
      <MenuOutlined className="cursor-pointer text-xl text-white" />
    </nav>
  );
};

export default Navbar;
