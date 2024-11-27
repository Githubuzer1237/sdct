// import React, { useEffect, useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import s from './MainPage.module.scss'
// const MainPage = () => {
//     const [userData, setUserData] = useState(null);
//     const navigate = useNavigate();

//     useEffect(() => {
//         const username = localStorage.getItem('loggedInUsername');
//         if (!username) {
//             navigate('/login'); 
//         } else {
//             const user = JSON.parse(localStorage.getItem(username));
//             setUserData(user);
//             SetFormData(user);
//         }
//     }, [navigate]);

//     const handleLogout = () => {
//         localStorage.removeItem('loggedInUsername'); 
//         navigate('/login'); 
//     };
//     const handleEditClick = () => {
//         setIsEditing(true); 
//     };


//     const handleCancelEdit = () => {
//         setIsEditing(false); 
//         setFormData(userData); 
//     };

//     const handleChange = (e) => {
//         setFormData({
//             ...formData,
//             [e.target.name]: e.target.value
//         });
//     };

//     const handleSaveChanges = () => {
//         localStorage.setItem(userData.username, JSON.stringify(formData)); 
//         setUserData(formData);
//         setIsEditing(false); 
//     };

//     return (
//        <>
//             {userData ? (

//                     <div className={s.sects}>
//                     <div className={s.section}>
//                     <h2 >Группы</h2>
//                     <h3  className={s.groups}>Группа</h3>
//                     <h3  className={s.groups}>Группа</h3>
//                     <h3  className={s.groups}>Группа</h3>
//                     <h3  className={s.groups}>Группа</h3>

//                     </div>
//                     <div className={s.section_2}>
//                         <div className={s.main}>
//                         <img className={  userData.avatar ? s.pfp  : s.defoltpfp} src={userData.avatar || 'profileimg.png'} alt="" />
//                         <div className={s.info}>
//                         <h2 className={s.username}>  <b>{userData.firstName}  {userData.lastName}</b></h2>
//                         <p><b>Имя: </b>{userData.firstName}</p>
//                         <p><b>Фамилия:</b>{userData.lastName}</p>
//                         <p> <b>Хобби:</b> {userData.hobby}</p>
//                         <p> <b>Образование/Работа:</b> {userData.education}</p>
//                         </div>



//                         <div className={s.inst}>
//                         <button onClick={handleLogout}>Выйти</button>
                               
//                                 <button onClick={handleEditClick}>✏️ Редактировать</button>
//                         </div>
//                         </div>
//                     </div>
//                     </div>
//             ) : (
//                 <p>Загрузка...</p>
//             )}
//        </>
//     );
// };

// export default MainPage;








// import React, { useEffect, useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import s from './MainPage.module.scss';

// const MainPage = () => {
//     const [userData, setUserData] = useState(null);
//     const [formData, setFormData] = useState(null);
//     const [isEditing, setIsEditing] = useState(false); 
//     const navigate = useNavigate();

//     useEffect(() => {
//         const username = localStorage.getItem('loggedInUsername');
//         if (!username) {
//             navigate('/login'); 
//         } else {
//             const user = JSON.parse(localStorage.getItem(username));
//             setUserData(user);
//             setFormData(user);  
//         }
//     }, [navigate]);

//     const handleLogout = () => {
//         localStorage.removeItem('loggedInUsername'); 
//         navigate('/login'); 
//     };

//     const handleEditClick = () => {
//         setIsEditing(true);
//     };

//     const handleCancelEdit = () => {
//         setIsEditing(false);
//         setFormData(userData); 
//     };

//     const handleChange = (e) => {
//         setFormData({
//             ...formData,
//             [e.target.name]: e.target.value
//         });
//     };

//     const handleSaveChanges = () => {
//         localStorage.setItem(userData.username, JSON.stringify(formData)); 
//         setUserData(formData);
//         setIsEditing(false); 
//     };

//     return (
//         <>
//             {userData ? (
//                 <div className={s.sects}>
//                     <div className={s.section}>
//                         <h2>Группы</h2>
//                         <h3 className={s.groups}>Группа</h3>
//                         <h3 className={s.groups}>Группа</h3>
//                         <h3 className={s.groups}>Группа</h3>
//                         <h3 className={s.groups}>Группа</h3>
//                     </div>
//                     <div className={s.section_2}>
//                         <div className={s.main}>
//                             <img className={userData.avatar ? s.pfp : s.defoltpfp} 
//                                  src={userData.avatar || 'profileimg.png'} alt="profile" />
//                             <div className={s.info}>
//                                 <h2 className={s.username}><b>{userData.firstName} {userData.lastName}</b></h2>
//                                 <p><b>Имя: </b>{userData.firstName}</p>
//                                 <p><b>Фамилия:</b>{userData.lastName}</p>
//                                 <p><b>Хобби:</b> {userData.hobby}</p>
//                                 <p><b>Образование/Работа:</b> {userData.education}</p>
//                             </div>

//                             <div className={s.inst}>
//                                 <button onClick={handleLogout}>Выйти</button>

//                                 <button onClick={handleEditClick}>✏️ Редактировать</button>
//                             </div>
//                         </div>
//                     </div>

//                     {/* Режим редактирования профиля */}
//                     {isEditing && (
//                         <div className={s.editForm}>
//                             <h2>Редактировать профиль</h2>
//                             <form>
//                                 <div>
//                                     <label>Имя:</label>
//                                     <input 
//                                         type="text" 
//                                         name="firstName" 
//                                         value={formData.firstName} 
//                                         onChange={handleChange} 
//                                     />
//                                 </div>
//                                 <div>
//                                     <label>Фамилия:</label>
//                                     <input 
//                                         type="text" 
//                                         name="lastName" 
//                                         value={formData.lastName} 
//                                         onChange={handleChange} 
//                                     />
//                                 </div>
//                                 <div>
//                                     <label>Хобби:</label>
//                                     <input 
//                                         type="text" 
//                                         name="hobby" 
//                                         value={formData.hobby} 
//                                         onChange={handleChange} 
//                                     />
//                                 </div>
//                                 <div>
//                                     <label>Образование/Работа:</label>
//                                     <input 
//                                         type="text" 
//                                         name="education" 
//                                         value={formData.education} 
//                                         onChange={handleChange} 
//                                     />
//                                 </div>
//                             </form>
//                             <button onClick={handleSaveChanges}>Сохранить изменения</button>
//                             <button onClick={handleCancelEdit}>Отмена</button>
//                         </div>
//                     )}
//                 </div>
//             ) : (
//                 <p>Загрузка...</p>
//             )}
//         </>
//     );
// };

// export default MainPage;




import { Link, useNavigate } from 'react-router-dom';
import s from './MainPage.module.scss';
import { useEffect, useState } from 'react';

const MainPage = () => {
    const [userData, setUserData] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const username = localStorage.getItem('loggedInUsername');
        if (!username) {
            navigate('/login');
        } else {
            const user = JSON.parse(localStorage.getItem(username));
            setUserData(user);
        }
    }, [navigate]);

    const handleLogout = () => {
        localStorage.removeItem('loggedInUsername');
        navigate('/login');
    };

    return (
        <>
            {userData ? (
                <div className={s.sects}>
                    <div className={s.section}>
                        <h2>Группы</h2>
                        <h3 className={s.groups}>Группа</h3>
                        <h3 className={s.groups}>Группа</h3>
                        <h3 className={s.groups}>Группа</h3>
                        <h3 className={s.groups}>Группа</h3>
                    </div>
                    <div className={s.section_2}>
                        <div className={s.main}>
                            <img className={userData.avatar ? s.pfp : s.defoltpfp} 
                                 src={userData.avatar || 'profileimg.png'} alt="profile" />
                            <div className={s.info}>
                                <h2 className={s.username}><b>{userData.firstName} {userData.lastName}</b></h2>
                                <p><b>Имя: </b>{userData.firstName}</p>
                                <p><b>Фамилия:</b>{userData.lastName}</p>
                                <p><b>Хобби:</b> {userData.hobby}</p>
                                <p><b>Образование/Работа:</b> {userData.education}</p>
                            </div>
                            <div className={s.inst}>
                                <button onClick={handleLogout}>Выйти</button>
                                <button onClick={() => navigate('/edit')}>✏️ Редактировать</button>
                            </div>
                        </div>
                    </div>
                </div>
            ) : (
                <p>Загрузка...</p>
            )}
        </>
    );
};

export default MainPage;
