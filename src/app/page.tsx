import getSkills from '@/api/skills';

const Home = async () => {
  const skills = await getSkills();

  return (
    <main>
      <div>
        <code>{skills && skills.map(({ label }: { label: string }) => <p>{label}</p>)}</code>
      </div>
    </main>
  );
};

export default Home;
