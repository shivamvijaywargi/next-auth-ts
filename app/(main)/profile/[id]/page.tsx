type Params = {
  params: {
    id: string;
  };
};

const ProfilePage = ({ params }: Params) => {
  console.log(params.id);
  return <div>{params.id}</div>;
};

export default ProfilePage;
