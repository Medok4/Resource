import './App.css'
import home from '../src/assets/Home.png'
import logo from '../src/assets/Logo.png'
import Search_Icon from '../src/assets/Search_Icon.png'
import Meet_Img from '../src/assets/Meet_Img.png'
import Blog2_Back from '../src/assets/Blog2_Back.png'
import Blog3_Back from '../src/assets/Blog3_Back.png'
import Inspired_Img from '../src/assets/Inspired_Img.png'
import Learned from '../src/assets/i_learned.png'
import Arrow from '../src/assets/Arrow.png'
import Footer_Logo from '../src/assets/Footer_Logo.png'
import Mne_Len from '../src/assets/Mne_Len.png'
import Text_Icon from '../src/assets/Text_Icon.png'
import Galka from '../src/assets/galka.png'
import LAST from '../src/assets/LAST.png'
import { useEffect } from 'react'
import { useState } from 'react'


function App() {

   const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Функция для загрузки данных с бэкенда
  const fetchData = async () => {
    try {
      const response = await fetch('http://localhost:3001/api/data');
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const result = await response.json();
      setData(result);
      setLoading(false);
    } catch (err) {
      setError(err.message);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (loading) return <p>Загрузка данных...</p>;
  if (error) return <p>Ошибка: {error}</p>;
  if (!data || data.length === 0) return <p>Нет данных</p>;

  return (
    <>
      <nav className='w-full h-[80px] drop-shadow-sm bg-white flex justify-center'>
        <div className='w-[1230px] h-full flex items-center'>
          <div className='w-[505px] h-full flex justify-between items-center'>
            <img src={home} alt="" className='cursor-pointer'/>
            <p className='font-[Poppins] uppercase cursor-pointer'>Resource Center</p>
            <p className='font-[Poppins] uppercase cursor-pointer'>Blog</p>
            <p className='font-[Poppins] uppercase cursor-pointer'>Featured</p>
            <p className='font-[Poppins] uppercase cursor-pointer'>About</p>
            <p className='font-[Poppins] uppercase cursor-pointer'>Contact</p>
          </div>

          <div className='w-[150px] h-[98px] bg-[#F55F39] ml-[35px] flex justify-center items-center'>
            <img src={logo} alt="" />
          </div>

          <div className='w-[390px] h-[42px] ml-[150px] flex'>
            <div className='w-[254px] h-full flex items-center border-solid border-[#E0E0E0] border-[1px] rounded-[5px]'>
              <img className='ml-[11px]' src={Search_Icon} alt="" />
              <p className='ml-[20px] font-[Poppins] text-[14px] text-[#E0E0E0]'>Search website...</p>
            </div>
            <button className='w-[137px] h-[42px] bg-[#B8BDC9] cursor-pointer text-[#E0E0E0] text-[14px] font-[Poppins]'>Search</button>
          </div>
        </div>
      </nav>

      {/* Блок с инфой */}
      <section className='w-full h-[700px] bg-[url(../src/assets/Info_Back.png)] bg-no-repeat bg-center flex justify-center'>
        <div className='w-[1440px] h-full flex items-center'>
          <div className='w-[610px] h-[371px] ml-[250px]'>
            <p className='font-[Poppins] text-[#444444] text-[49px]'>The <span className='text-[#2BCA8B] underline'>most complete</span> <br /> Photograhy resource.</p>
            <p className='font-[Poppins] text-[19px] text-[#444444]'>Welcome at Template Resource. This template is packed with useful features to built out your own resource website.</p>
            <div className='w-[481px] h-[63px] mt-[85px] flex justify-between'>
              <button className='w-[211px] h-[63px] bg-[#F55F39] cursor-pointer'><p className='text-[23px] text-white font-[Poppins]'>Visit our Blog <br /> <span className='text-[14px]'>Stories, News & Info</span></p></button>
              <button className='w-[255px] h-[63px] bg-white cursor-pointer'><p className='text-[23px] text-[4D4D4D] font-[Poppins]'>Resource Center <br /> <span className='text-[14px]'>Tips, Tricks & Tutorials</span></p></button>
            </div>
          </div>
        </div>
        
      </section>

      {/* How can we help you? No you can`t */}
      <section className='w-full h-[225px] flex justify-center items-center'>
        <div className='w-[1440px] h-full flex items-center'>
          <div className='w-[440px] h-[124px] flex ml-[210px]'>
            <p className='w-[125px] font-[Poppins] text-[#2BCABB] text-[28px]'>How can we help you?</p>
            <div className='w-[260px] h-[124px] ml-[55px] flex flex-col justify-between'>
              <p className='font-[Poppins] text-[14px] text-[#252061]'>Visit our Blog</p>
              <p className='font-[Poppins] text-[14px] text-[#252061]'>Photographers Resources Library</p>
              <p className='font-[Poppins] text-[14px] text-[#252061]'>Featured Stories</p>
              <p className='font-[Poppins] text-[14px] text-[#252061]'>Get Full Access Today!</p>
            </div>
            
          </div>
          <div className='w-[600px] h-[305px] bg-[url(../src/assets/Meet_Back.png)] bg-amber-900 ml-[191px] relative bottom-[40px] drop-shadow-sm'>
            <div className='w-[330px] h-[217px] ml-[55px] mt-[37px] flex flex-col justify-between items-start'>
              <p className='font-[Poppins] text-white text-[24px]'>Meet our Writers</p>
              <p className='font-[Poppins] text-white text-[14px] w-[306px]'>We've got a professional team of professional photographers providing you with resources.</p>
              <img src={Meet_Img} alt="" />
            </div>
            
          </div>
        </div>
      </section>

      {/* I hate this template */}
      <section className='w-full h-[1050px] flex justify-center'>
        <div className='w-[940px] h-[950px] mt-[48px] flex flex-col justify-between'>
          <p className='font-[Poppins] text-[52px] text-[#444444]'>Recently in our <br /> Photography <span className='text-[#F55F39] underline'>Blog.</span></p>
          <div className='w-full h-[769px] flex justify-between'>
            <div className='w-[534px] h-[708px] bg-[url(../src/assets/Blog1_Back.png)]'></div>
            <div className='w-[376px] h-[769px] flex flex-col justify-between'>
              <img src={Blog2_Back} alt="" />
              <img src={Blog3_Back} alt="" />
              <div className='w-[376px] h-[229px] bg-[url(../src/assets/Blog4_Back.png)] flex items-center'>
                <div className='w-[208px] h-[144px] ml-[60px] flex flex-col justify-between'>
                  <p className='font-[Poppins] text-white text-[28px]'>Visit Full Blog</p>
                  <p className='font-[Poppins] text-white text-[14px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                  <a className='font-[Poppins] text-[#F55F39] text-[14px]' href="https://www.youtube.com/watch?v=a4na2opArGY&list=RDa4na2opArGY&start_radio=1">Visit Blog</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Inspired to not inspired */}
      <section className='w-full h-[760px] flex justify-center items-center'>
        <div className='w-[1100px] h-[660px] bg-[url(../src/assets/Inspired_Back.png)] flex items-end z-20'>
          <div className='w-[530px] h-[479px] bg-[#352F77] flex justify-center items-center'>
            <div className='w-[414px] h-[367px] flex flex-col justify-between'>
              <p className='font-[Poppins] text-[44px] text-white'>Inspired to get your photography to the next level?</p>
              <p className='font-[Poppins] text-[15px] text-white'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.</p>
              <button className='w-[355px] h-[68px] bg-[#2BCA8B] flex items-center justify-start gap-[25px] cursor-pointer'>
                <img className='ml-[25px]' src={Inspired_Img} alt="" />
                <div className='flex flex-col text-start'>
                  <p className='font-[Poppins] text-[23px] text-white'>Resource Center</p>
                  <p className='font-[Poppins] text-[14px] text-white'>Packed with useful tips & tutorials</p>
                </div>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/*  Delayed and next one*/}
      <section className='w-full h-[1993px] flex items-center relative z-0 flex-col'>
        <div className='w-[1440px] h-[1193px] bg-[url(../src/assets/Back_Back.png)] z-0 relative bottom-[230px] flex items-center justify-center'>
          <div className='w-[940px] h-[690px] flex flex-col justify-between items-center'>
            <p className='font-[Poppins] text-[52px] text-white'>Get full accesses. Today</p>
            <div className='w-full h-[429px] flex justify-between'>
              <div className='bg-white w-[287px] h-full flex justify-center items-center'>
                <div className='w-[205px] h-[348px] flex flex-col justify-between'>
                  <p className='font-[Poppins] text-[#183EB6] text-[15px]'>1 Month Access</p>
                  <p className='font-[Poppins] text-black text-[55px]'>$49 <span className='text-[14px]'>/month</span></p>
                  <div>
                    <p className='flex items-center text-black text-[13px] font-[Poppins gap-[15px]'><img src={Galka} alt="" />Full Access to Resources </p>
                    <p className='flex items-center text-black text-[13px] font-[Poppins gap-[15px]'><img src={Galka} alt="" />Access to Blog </p>
                    <p className='flex items-center text-black text-[13px] font-[Poppins gap-[15px]'><img src={Galka} alt="" />Access to News </p>
                  </div>
                  <button className='border-none w-[112px] h-[47px] bg-[#2BCA8B] font-[Poppins] text-white text-[14px]'>Buy Now</button>
                  <p className='font-[Poppins] text-[#9DA0AC] text-[11px]'>On checkout you will be charged the total amount of $534 for the 6 month package.</p>
                </div>
              </div>
              <div className='bg-white w-[287px] h-full flex justify-center items-center'>
                <div className='w-[205px] h-[348px] flex flex-col justify-between'>
                  <p className='font-[Poppins] text-[#183EB6] text-[15px]'>1 Month Access</p>
                  <p className='font-[Poppins] text-black text-[55px]'>$49 <span className='text-[14px]'>/month</span></p>
                  <div>
                    <p className='flex items-center text-black text-[13px] font-[Poppins gap-[15px]'><img src={Galka} alt="" />Full Access to Resources </p>
                    <p className='flex items-center text-black text-[13px] font-[Poppins gap-[15px]'><img src={Galka} alt="" />Access to Blog </p>
                    <p className='flex items-center text-black text-[13px] font-[Poppins gap-[15px]'><img src={Galka} alt="" />Access to News </p>
                  </div>
                  <button className='border-none w-[112px] h-[47px] bg-[#2BCA8B] font-[Poppins] text-white text-[14px]'>Buy Now</button>
                  <p className='font-[Poppins] text-[#9DA0AC] text-[11px]'>On checkout you will be charged the total amount of $534 for the 6 month package.</p>
                </div>
              </div>
              <div className='bg-white w-[287px] h-full flex justify-center items-center'>
                <div className='w-[205px] h-[348px] flex flex-col justify-between'>
                  <p className='font-[Poppins] text-[#183EB6] text-[15px]'>1 Month Access</p>
                  <p className='font-[Poppins] text-black text-[55px]'>$49 <span className='text-[14px]'>/month</span></p>
                  <div>
                    <p className='flex items-center text-black text-[13px] font-[Poppins gap-[15px]'><img src={Galka} alt="" />Full Access to Resources </p>
                    <p className='flex items-center text-black text-[13px] font-[Poppins gap-[15px]'><img src={Galka} alt="" />Access to Blog </p>
                    <p className='flex items-center text-black text-[13px] font-[Poppins gap-[15px]'><img src={Galka} alt="" />Access to News </p>
                  </div>
                  <button className='border-none w-[112px] h-[47px] bg-[#2BCA8B] font-[Poppins] text-white text-[14px]'>Buy Now</button>
                  <p className='font-[Poppins] text-[#9DA0AC] text-[11px]'>On checkout you will be charged the total amount of $534 for the 6 month package.</p>
                </div>
              </div>
            </div>
            <div className='w-full h-[77px] flex justify-around items-center'>
              <div className='flex flex-col'>
                <p className='flex items-center font-[Poppins] text-white text-[21px]'><img src={LAST} alt="" /> Instant Access</p>
                <p className='font-[Poppins] text-[13px] text-white'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius <br /> enim in eros elementum tristique. Duis cursus, mi quis viverra ornare.</p>
              </div>
              <p className='font-[Poppins] text-[14px] text-white'>Learn more</p>
            </div>
          </div>
        </div>

        <div className='w-[1440px] h-[727px] flex relative bottom-[230px]'>
          <div className='w-[720px] h-[797px] bg-white relative bottom-[70px]'>
            <div>
              <p className='font-[Poppins] text-[28px] text-[#444444] ml-[205px] mt-[50px]'>What <span className='text-[#2BCA8B] underline'>others</span> say.</p>
              <img className='ml-[145px] mt-[50px]' src={Learned} alt="" />
            </div>
          </div>
          <div className='bg-[#F0F0F0] w-[720px] h-[727px] flex flex-col justify-center'>
            <div className='w-[460px] h-[617px] ml-[55px] flex flex-col justify-between'>
              <p className='font-[Poppins] text-[#444444] text-[28px]'>What kind of <br /> photographer <span className='text-[#2BCA8B] underline'>are you</span>?</p>
              <div className='w-[350px] h-[141px] flex flex-col justify-between'>
                <div className='w-full h-[1px] bg-[#DADADA]'></div>
                <p className='font-[Poppins] text-[20px] text-[#524B9A]'>Amateur</p>
                <div className='w-full flex justify-between items-center'>
                  <p className='w-[305px] text-[15px] text-[#363636] font-[Poppins]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius.</p>
                  <img src={Arrow} alt="" />
                </div>
                <p className='font-[Poppins] text-[14px] text-[#4163AC]'>More Information</p>
              </div>
              <div className='w-[350px] h-[141px] flex flex-col justify-between'>
                <div className='w-full h-[1px] bg-[#DADADA]'></div>
                <p className='font-[Poppins] text-[20px] text-[#524B9A]'>Beginner</p>
                <div className='w-full flex justify-between items-center'>
                  <p className='w-[305px] text-[15px] text-[#363636] font-[Poppins]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius.</p>
                  <img src={Arrow} alt="" />
                </div>
                <p className='font-[Poppins] text-[14px] text-[#4163AC]'>More Information</p>
              </div>
              <div className='w-[350px] h-[141px] flex flex-col justify-between'>
                <div className='w-full h-[1px] bg-[#DADADA]'></div>
                <p className='font-[Poppins] text-[20px] text-[#524B9A]'>Professional</p>
                <div className='w-full flex justify-between items-center'>
                  <p className='w-[305px] text-[15px] text-[#363636] font-[Poppins]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius.</p>
                  <img src={Arrow} alt="" />
                </div>
                <p className='font-[Poppins] text-[14px] text-[#4163AC]'>More Information</p>
              </div>
              <p className='font-[Poppins] text-[#F55F39] text-[15px] cursor-pointer'>Visit Resource Center</p>
            </div>
          </div>
        </div>
      </section>

      {/* Last Back Delayed */}
      <section className='w-full h-[654px] flex flex-col items-center'>
        <p className='font-[Poppins] text-[#444444] text-[24px] text-center'>The most complete Photography resource. <br /> <span className='text-[52px]'>Search our Resources:</span></p>
        <img className='mt-[50px]' src={Mne_Len} alt="" />
        <div className='w-[960px] h-[296px] flex justify-around mt-[50px]'>
          <div className='w-[300px] h-full border-solid border-[#E6E8EE] border-[3px]'>
            <p className='font-[Poppins] text-[17px] text-[#252061] mt-[30px] ml-[30px]'>{data[0].r_name}</p>
            <p className='flex gap-[10px] items-center text-[#F55F39] text-[12px] font-[Poppins] ml-[30px] mt-[16px]'><img src={Text_Icon} alt="" /> {data[0].r_one}</p>
            <p className='flex gap-[10px] items-center text-[#F55F39] text-[12px] font-[Poppins] ml-[30px] mt-[8px]'><img src={Text_Icon} alt="" /> {data[0].r_two}</p>
            <p className='flex gap-[10px] items-center text-[#F55F39] text-[12px] font-[Poppins] ml-[30px] mt-[8px]'><img src={Text_Icon} alt="" /> {data[0].r_three}</p>
            <p className='flex gap-[10px] items-center text-[#F55F39] text-[12px] font-[Poppins] ml-[30px] mt-[8px]'><img src={Text_Icon} alt="" /> {data[0].r_four}</p>
            <div className='w-full h-[53px] bg-[#EEF1F6] flex items-center mt-[69px]'>
              <p className='font-[Poppins] text-[11px] text-[#252061] ml-[30px]'>View All</p>
            </div>
          </div>
          <div className='w-[300px] h-full border-solid border-[#E6E8EE] border-[3px]'>
            <p className='font-[Poppins] text-[17px] text-[#252061] mt-[30px] ml-[30px]'>{data[1].r_name}</p>
            <p className='flex gap-[10px] items-center text-[#F55F39] text-[12px] font-[Poppins] ml-[30px] mt-[16px]'><img src={Text_Icon} alt="" /> {data[1].r_one}</p>
            <p className='flex gap-[10px] items-center text-[#F55F39] text-[12px] font-[Poppins] ml-[30px] mt-[8px]'><img src={Text_Icon} alt="" /> {data[1].r_two}</p>
            <p className='flex gap-[10px] items-center text-[#F55F39] text-[12px] font-[Poppins] ml-[30px] mt-[8px]'><img src={Text_Icon} alt="" /> {data[1].r_three}</p>
            <p className='flex gap-[10px] items-center text-[#F55F39] text-[12px] font-[Poppins] ml-[30px] mt-[8px]'><img src={Text_Icon} alt="" /> {data[1].r_four}</p>
            <div className='w-full h-[53px] bg-[#EEF1F6] flex items-center mt-[69px]'>
              <p className='font-[Poppins] text-[11px] text-[#252061] ml-[30px]'>View All</p>
            </div>
          </div>
          <div className='w-[300px] h-full border-solid border-[#E6E8EE] border-[3px]'>
            <p className='font-[Poppins] text-[17px] text-[#252061] mt-[30px] ml-[30px]'>{data[2].r_name}</p>
            <p className='flex gap-[10px] items-center text-[#F55F39] text-[12px] font-[Poppins] ml-[30px] mt-[16px]'><img src={Text_Icon} alt="" /> {data[2].r_one}</p>
            <p className='flex gap-[10px] items-center text-[#F55F39] text-[12px] font-[Poppins] ml-[30px] mt-[8px]'><img src={Text_Icon} alt="" /> {data[2].r_two}</p>
            <p className='flex gap-[10px] items-center text-[#F55F39] text-[12px] font-[Poppins] ml-[30px] mt-[8px]'><img src={Text_Icon} alt="" /> {data[2].r_three}</p>
            <p className='flex gap-[10px] items-center text-[#F55F39] text-[12px] font-[Poppins] ml-[30px] mt-[8px]'><img src={Text_Icon} alt="" /> {data[2].r_four}</p>
            <div className='w-full h-[53px] bg-[#EEF1F6] flex items-center mt-[69px]'>
              <p className='font-[Poppins] text-[11px] text-[#252061] ml-[30px]'>View All</p>
            </div>
          </div>
        </div>
      </section>

      <footer className='w-full h-[484px] flex justify-center'>
        <div className='w-[1440px] h-full bg-[url(../src/assets/Footer_Back.png)] flex justify-center items-center'>
          <div className='w-[940px] h-[274px] flex flex-col justify-between'>
            <div className='w-full h-[140px] flex justify-between'>
              <div className='w-[300px] h-full flex flex-col justify-between items-start'>
                <img src={Footer_Logo} alt="" />
                <p className='font-[Poppins] text-[15px] text-white'>Welcome at Template Resource. This template is packed with useful features to built out your own resource website.</p>
              </div>
              <div className='w-[570px] h-full flex justify-between'>
                <div className='w-[190px] h-full flex flex-col gap-[10px]'>
                  <p className='font-[Poppins] text-white text-[18px]'>About us</p>
                  <p className='font-[Poppins] text-[#ABA8CA] text-[14px] ml-[5px]'>About us</p>
                  <p className='font-[Poppins] text-[#ABA8CA] text-[14px] ml-[5px]'>Our team</p>
                  <p className='font-[Poppins] text-[#ABA8CA] text-[14px] ml-[5px]'>Frequent Questions</p>
                  <p className='font-[Poppins] text-[#ABA8CA] text-[14px] ml-[5px]'>Contact us</p>
                </div>
                <div className='w-[190px] h-full flex flex-col gap-[10px]'>
                  <p className='font-[Poppins] text-white text-[18px]'>Information</p>
                  <p className='font-[Poppins] text-[#ABA8CA] text-[14px] ml-[5px]'>Blog</p>
                  <p className='font-[Poppins] text-[#ABA8CA] text-[14px] ml-[5px]'>Pricing</p>
                  <p className='font-[Poppins] text-[#ABA8CA] text-[14px] ml-[5px]'>Resources</p>
                  <p className='font-[Poppins] text-[#ABA8CA] text-[14px] ml-[5px]'>Frequent Questions</p>
                </div>
                <div className='w-[190px] h-full flex flex-col gap-[10px]'>
                  <p className='font-[Poppins] text-white text-[18px]'>Contact</p>
                  <p className='font-[Poppins] text-[#ABA8CA] text-[14px] ml-[5px]'>Email us</p>
                  <p className='font-[Poppins] text-[#ABA8CA] text-[14px] ml-[5px]'>Support Page</p>
                  <p className='font-[Poppins] text-[#ABA8CA] text-[14px] ml-[5px]'>Facebook</p>
                  <p className='font-[Poppins] text-[#ABA8CA] text-[14px] ml-[5px]'>Twitter</p>
                </div>
              </div>
            </div>
            <div className='bg-white w-full h-[1px]'></div>
            <p className='text-white text-[12px] font-[Poppins]'>Copyright © <span className='text-[#F55F39]'>Studio Corvus</span>  Powered by <span className='text-[#F55F39]'>Webflow Template Licensing Info</span>  </p>
          </div>
        </div>
      </footer>
    </>
  )
}

export default App
