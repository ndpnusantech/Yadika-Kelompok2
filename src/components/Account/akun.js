import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Sidebar from "../layouts/sidebar/sidebar"
import "./akun.css"

const Akun = () => {
  const username = localStorage.getItem('username');
  // const password = localStorage.getItem('password');
  const noHp = localStorage.getItem('noHP');
  const email = localStorage.getItem('email');
  return (
    <>
      <Sidebar />
      <div className='Profile'>
        <div className='cards-akun'>
          <Card className='card-profile'>
            <div className="card-header-akun">
              <Card.Img className='card-img-akun' variant="top" src="/images/pofile.png" />
              <Card.Title className='card-title-akun'>{username}</Card.Title><br/>
            <Card.Body><br/><br/>
              <Card.Text className='card-txt-akun'>
                {email}<br/>
                {noHp}<br/>
                </Card.Text>
                {/* <Card.Text className='card-txt-akun'>
                {noHp}<br/>
                </Card.Text> */}
            </Card.Body>
            </div>
          </Card>
        </div>
        <div className='btn-group-akun'>
          <Button variant="light"className='btn-akun' href="/editProfile">Edit Profile</Button>
          <Button variant="light"className='btn-akun' href="/favorite">Favorite</Button>
          <Button variant="light"className='btn-akun' href="/historyTrans">History Transaction</Button>
          <Button variant="light" className='btn-akun' href="/historyWatching">History Watch</Button>
          <Button variant="light"className='btn-logout' href="/">Log Out</Button>
        </div>
      </div>
    </>
  );
}

export default Akun;
