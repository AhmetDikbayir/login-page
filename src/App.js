import './index.css'
import useLocalStorage from 'use-local-storage';

function App() {
  //Used LocalStorage for remeber the current theme
  const [theme, setTheme] = useLocalStorage('theme' ? 'dark' : 'light')

  //Can be changed theme with this function
  const switchTheme = () => {
    //Used here short if for changing the theme
    const newTheme = theme ==='light' ? 'dark' : 'light';
    //Set the new theme as a current theme with setTheme function.
    setTheme(newTheme)
  }
  return (
    <div className="app" data-theme={theme}>
      <div className='login'>
        <h1>Welcome </h1>
        <div className='container'>
          <div className='top'>
            {/*Used here Fontawesome icons
               Used here title for SEO*/}
            <i class='fab fa-google' title='Sign with Google'></i>
            <i class='fab fa-facebook-square'  title='Sign with Facebook'></i>
            <i class='fab fa-Linkedin' title='Sign with Linkedin'></i>
            <i class='fab fa-twitter-square' title='Sign with Twitter'></i>
            <i class='fab fa-apple' title='Sign with Apple'></i>
          </div>
          <p className='divider'><span>Or</span> </p>
          <form>
            <label>E-mail</label>
            <input type='email' placeholder='Enter your e-mail' />
            <label>Password</label>
            <input type='password' placeholder='Enter your password' />
            <div className='remember'>
              <input type='checkbox' checked='checked' />
              <p>Remember Me</p>
            </div>
            <button>Log In</button>
          </form>
          <div className='bottom'>
            <p>Forget your password?</p>
            <a href='/'>Reset Password</a>
          </div>
          <button>
            <p className='create'>Create Account</p>
          </button>
        </div>
        {/*Light-Dark theme control Section*/}
        <div className='theme-toggle'>
          <h2>Light Theme</h2>
          <i onClick={switchTheme} class='fas fa-toggle-on'></i>
        </div>
      </div>
    </div>
  );
}

export default App;
