import { useState, useEffect } from "react";
import apiService from "../services/api.service";
import { useNavigate } from "react-router-dom";

const EditProfilePage = () => {
  
    const navigate = useNavigate()
    const [profile, setProfile] = useState({ 
        name: "", 
        password: "", 
        email: "", 
        phone: "", 
        address: {
            street: "",
            number: "",
            city: "",
            profile: "",
            zip: ""
          },
        boxing: "",
        unboxing: "",
        material: "",
        valueFloor: "",
        document: "" });

    
    useEffect(() => {
        async function getProfile(){
            try {
                const result = await apiService.getCompany()
                setProfile(result.data) 
            } catch(err) {
                console.log(err)
            }
        }
        getProfile()
    }, [])

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
                profile: profile.state,
                zip: profile.zip
              },
              document: profile.document
            }
            await apiService.editProfile(editedUser);
            alert("Profile successfully updated!")
            navigate("/");
          } catch (err) {
            console.error(err);
          }
      }

    return (
    
    <div>
      <h1 className="title">Edit Page</h1>
      <form className="char-creation" onSubmit={handleSubmit}>
        
        <div>
          <label htmlFor="signupFormName">Name</label>
          <input
            type="text"
            name={profile.name}
            id="signupFormName"
            value={profile.name}
            onChange={(e) => setProfile({ ...profile, name: e.target.value })}
          />
        </div>

        <div>
          <label htmlFor="signupFormEmail">E-mail Address</label>
          <input
            type="email"
            name={profile.email}
            id="signupFormEmail"
            value={profile.email}
            onChange={(e) => setProfile({ ...profile, email: e.target.value })}
          />
        </div>

        <div>
          <label htmlFor="signupFormPassword">Password</label>
          <input
            type="password"
            name={profile.password}
            id="signupFormPassword"
            value={profile.password}
            onChange={(e) => setProfile({ ...profile, password: e.target.value })}
          />
        </div>

        <div>
          <label htmlFor="signupFormPhone">Phone</label>
          <input
            type="text"
            name={profile.phone}
            id="signupFormPhone"
            value={profile.phone}
            onChange={(e) => setProfile({ ...profile, phone: e.target.value })}
          />
        </div>

        <div>
          <label htmlFor="signupFormStreet">Street</label>
          <input
            type="text"
            name={profile.address.street}
            id="signupFormStreet"
            value={profile.address.street}
            onChange={(e) => setProfile({ ...profile, street: e.target.value })}
          />
        </div>

        <div>
          <label htmlFor="signupFormNumber">Number</label>
          <input
            type="text"
            name={profile.address.number}
            id="signupFormNumber"
            value={profile.address.number}
            onChange={(e) => setProfile({ ...profile, number: e.target.value })}
          />
        </div>

        <div>
          <label htmlFor="signupFormCity">City</label>
          <input
            type="text"
            name={profile.address.city}
            id="signupFormCity"
            value={profile.address.city}
            onChange={(e) => setProfile({ ...profile, city: e.target.value })}
          />
        </div>

        <div>
          <label htmlFor="signupFormCity">State</label>
          <input
            type="text"
            name={profile.address.state}
            id="signupFormState"
            value={profile.address.state}
            onChange={(e) => setProfile({ ...profile, state: e.target.value })}
          />
        </div>

        <div>
          <label htmlFor="signupFormCity">Zipcode</label>
          <input
            type="text"
            name={profile.address.zip}
            id="signupFormZip"
            value={profile.address.zip}
            onChange={(e) => setProfile({ ...profile, zip: e.target.value })}
          />
        </div>

        <div>
          <label htmlFor="signupFormDocument">{profile.role==='user'? "CPF" : "CNPJ"}</label>
          <input
            type="text"
            name={profile.document}
            id="signupFormDocument"
            value={profile.document}
            onChange={(e) => setProfile({ ...profile, document: e.target.value })}
          />
        </div>

        {(profile.role === 'company') &&
        
        <div className="values-container">
            <div>
              <label htmlFor="signupFormBoxing">Boxing Value:</label>
                <input
                  type="text"
                  name={profile.boxing}
                  id="signupFormboxing"
                  value={profile.boxing}
                  
                  onChange={(e) => setProfile({ ...profile, boxing: e.target.value })}
                />
            </div>

            <div>
              <label htmlFor="signupFormUnboxing">Unboxing Value:</label>
                <input
                  type="text"
                  name={profile.unboxing}
                  id="signupFormUnboxing"
                  value={profile.unboxing}
                  
                  onChange={(e) => setProfile({ ...profile, unboxing: e.target.value })}
                />
            </div>

            <div>
              <label htmlFor="signupFormMaterial">Material Value:</label>
                <input
                  type="text"
                  name={profile.material}
                  id="signupFormMaterial"
                  value={profile.material}
                  
                  onChange={(e) => setProfile({ ...profile, material: e.target.value })}
                />
            </div>  

            <div>
              <label htmlFor="signupFormValueFloor">Value per Floors:</label>
                <input
                  type="text"
                  name={profile.valueFloor}
                  id="signupFormValueFloor"
                  value={profile.valueFloor}
                  
                  onChange={(e) => setProfile({ ...profile, valueFloor: e.target.value })}
                />
            </div>
        </div>
        }
        <button type="submit">Save Changes</button>
      </form>
    </div>
  );
}



export default EditProfilePage