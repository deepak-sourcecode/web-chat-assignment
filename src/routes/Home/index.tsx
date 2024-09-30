import Chats from '../../components/Chats';
import Conversation from '../../components/Conversation';
import Navbar from '../../components/Navbar';

const Home = () => {
  return (
    <div className="flex size-full flex-col bg-slate-100">
      <Navbar />
      <section className="flex min-h-0 min-w-[500px] flex-grow">
        <Chats />
        <Conversation />
      </section>
    </div>
  );
};

export default Home;
