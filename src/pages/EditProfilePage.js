import { useState, useEffect, useContext } from "react";
import { AuthContext } from "../contexts/authContext";
import apiService from "../services/api.service";
import { useNavigate } from "react-router-dom";
import Navbar from '../components/Navbar'

const EditProfilePage = () => {
  
    const navigate = useNavigate()

    const { loggedInUser, updateLoggedInUserInfo } = useContext(AuthContext)

    const [refresh, setRefresh] = useState(false)

    const [profile, setProfile] = useState({ 
        name: "", 
        password: "", 
        email: "", 
        phone: "", 
        street: "",
        number: "",
        city: "",
        state: "",
        zip: "",
        boxing: "",
        unboxing: "",
        material: "",
        valueFloor: "",
        document: "",
        imageUrl: ""
     });

     const [imageUrl, setImageUrl] = useState("")

     const handleFileUpload = async (e) => {
        
        const uploadData = new FormData()
    
        uploadData.append('imageUrl', e.target.files[0])
        const response = await apiService.uploadFile(uploadData)
    
        setImageUrl(response.filePath)
      }
    
    useEffect(() => {
        async function getProfile(){
            try {
                const result = await apiService.getCompany()
                setProfile({...result.data, street:result.data.address.street, number:result.data.address.number,
                    city:result.data.address.city, state:result.data.address.state, zip:result.data.address.zip, imageUrl:result.data.imageUrl}) 
                    setImageUrl(result.data.imageUrl)
            } catch(err) {
                console.log(err)
            }
        }
        getProfile()
    }, [refresh])

     async function handleSubmit(e) {
      e.preventDefault();
        try {
            const editedUser = {
              name: profile.name,
              email: profile.email,
              password: profile.password,
              phone: profile.phone,
              address: {
                street: profile.street,
                number: profile.number,
                city: profile.city,
                state: profile.state,
                zip: profile.zip
              },
              document: profile.document,
              imageUrl: imageUrl
            }
            
            await apiService.editProfile(editedUser);
            const updatedUser = {...loggedInUser, user: {...loggedInUser.user, imageUrl: editedUser.imageUrl}}
            updateLoggedInUserInfo(updatedUser)
            alert("Profile successfully updated!")
            setRefresh(!refresh)

          } catch (err) {
            console.error(err);
          }
      }

    return (
    
    <div>
        <Navbar />
      <h1 id = 'edit-your-profile'>Edit your profile</h1>
        
      <div className="signup-container">
        <form className = 'form-shadow' onSubmit={handleSubmit}>
            <div className = 'circular-image centered-image'>
                <img id='profile-image ' src={profile.imageUrl} alt='profile'/>
            </div>
                <label id = '' htmlFor="editProfilePicture">{loggedInUser.user.role === 'user' ? 'Choose a new profile picture' : 'Choose a new company logo'}</label>
                <input 
                type="file" 
                name={profile.imageUrl}
                onChange={ handleFileUpload } 
                />  

            <div className="form-group">
            <label htmlFor="editProfileName">Name</label>
            <input 
            type="text" 
            className="form-control" 
            name={profile.name}
            id="editProfileName"
            value={profile.name}
            onChange={(e) => setProfile({ ...profile, name: e.target.value })}
            />
        </div>

        <div className="form-group">
            <div>
            <label htmlFor="editProfileEmail">Email</label>
            <input 
                type="email" 
                className="form-control" 
                name={profile.email}
                id="editProfileEmail"
                value={profile.email}
                onChange={(e) => setProfile({ ...profile, email: e.target.value })} />
                </div>

        </div>
        <div className="form-group">
            <label htmlFor="editProfilePhone">Phone</label>
            <input 
            type="text" 
            className="form-control" 
            name={profile.phone}
            id="editProfilePhone"
            value={profile.phone}
            onChange={(e) => setProfile({ ...profile, phone: e.target.value })}/>
        </div>
        
        <div className="form-row">
        <div className="form-group col-md-6">
            <label htmlFor="inputStreet">Street</label>
            <input 
            type="text" 
            className="form-control" 
            name={profile.street}
            id="editProfileStreet"
            value={profile.street}
            onChange={(e) => setProfile({ ...profile, street: e.target.value})}/>


        </div>
        <div className="form-group col-md-6">
            <label htmlFor="editProfileNumber">Number</label>
            <input 
            type="number" 
            className="form-control" 
            name={profile.number}
            id="editProfileNumber"
            value={profile.number}
            onChange={(e) => setProfile({ ...profile, number: e.target.value})}/>
        </div>

        </div>
        <div className="form-row">
            <div className="form-group col-md-6">
            <label htmlFor="editProfileCity">City</label>
            <input 
                type="text" 
                className="form-control" 
                name={profile.city}
                id="editProfileCity"
                value={profile.city}
                onChange={(e) => setProfile({ ...profile, city: e.target.value })}
                />
            </div>

            <div className="form-group col-md-4">
            <label htmlFor="editFormState">State</label>
            <input 
                type="text" 
                className="form-control" 
                name={profile.state}
                id="seditProfileState"
                value={profile.state}
                onChange={(e) => setProfile({ ...profile, state: e.target.value })}/>
            </div>

            <div className="form-group col-md-2">
            <label for="editProfileZip">Zipcode</label>
            <input 
                type="text" 
                className="form-control" 
                name={profile.zip}
                id="editProfileZip"
                //pattern="	^\d{5}-\d{3}$"
                value={profile.zip}
                onChange={(e) => setProfile({ ...profile, zip: e.target.value })}/>
            </div>
        </div>

        <div className="form-group">
            <label htmlFor="editProfileDocument">{profile.role==='user'? "CPF" : "CNPJ"}</label>
            <input
                className='form-control'
                type="text"
                name={profile.document}
                id="editProfileDocument"
                value={profile.document}
                onChange={(e) => setProfile({ ...profile, document: e.target.value })}
                />
                </div>
        <button type="submit" className="btn btn-primary btn-block btn-lg" disabled={imageUrl === ''}>Save changes</button>
        </form>
    </div>
    </div>
  );
}



export default EditProfilePage