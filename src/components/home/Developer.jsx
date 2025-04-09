import React from 'react';

function Developer() {
  return (
    <section className="developer-section">
      <div className="container">
        <div className="developer-main-parent">
          
          <div className="developer-content-main">
          <div className="developer-content-parent">
              <h3>Meet our Software Developers</h3>
              <h2>Hire your next developer</h2>
              <p>
                Our talent pool is well-versed in industry-leading technologies,
                enabling seamless collaboration with you to deliver optimal results.
              </p>
            </div>

            <div className="developer-boxes-parent">
              <div className="developer-box-parent">
                <img src="/save-money.png" alt="" />
                <p>Save up to 65% cost compared to in-house hiring.</p>
              </div>

              <div className="developer-box-parent">
                <img src="/code.png" alt="" />
                <p>Get matched with elite developers within 48 hours.</p>
              </div>
            </div>



          </div>

          <div className="developer-video-content">
            
            <div className="client-video-parent developer-video-parent">
              <video className="client-videos" controls>
                <source
                  src="https://scoobies-backend.s3.ap-south-1.amazonaws.com/meghna_qa_final.mp4"
                  type="video/mp4"
                />
              </video>
              <div className="client-bio-parent developer-bio-parent">
                <h3>Meghna</h3>
                <p>QA Engineer</p>
              </div>
            </div>

            <div className="client-video-parent developer-video-parent">
              <video className="client-videos" controls>
                <source
                  src="https://scoobies-backend.s3.ap-south-1.amazonaws.com/manas_java_final.mp4"
                  type="video/mp4"
                />
              </video>
              <div className="client-bio-parent developer-bio-parent">
                <h3>Manas Upadhya</h3>
                <p>Java Developer</p>
              </div>
            </div>

            <div className="client-video-parent developer-video-parent">
              <video className="client-videos" controls>
                <source
                  src="https://scoobies-backend.s3.ap-south-1.amazonaws.com/Prachi_TechBA.mp4"
                  type="video/mp4"
                />
              </video>
              <div className="client-bio-parent developer-bio-parent">
                <h3>Prachi Negi</h3>
                <p>Business Analyst</p>
              </div>
            </div>

            <div className="client-video-parent developer-video-parent">
              <video className="client-videos" controls>
                <source
                  src="https://scoobies-backend.s3.ap-south-1.amazonaws.com/Mehak_Dotnet.mp4"
                  type="video/mp4"
                />
              </video>
              <div className="client-bio-parent developer-bio-parent">
                <h3>Mehak</h3>
                <p>Dot Net Developer</p>
              </div>
            </div>

            <div className="client-video-parent developer-video-parent">
              <video className="client-videos" controls>
                <source
                  src="https://scoobies-backend.s3.ap-south-1.amazonaws.com/Rahul_DigitalMarketing.mp4"
                  type="video/mp4"
                />
              </video>
              <div className="client-bio-parent developer-bio-parent">
                <h3>Rahul</h3>
                <p>Digital Marketer</p>
              </div>
            </div>

          </div>
          
        </div>
      </div>
    </section>
  );
}

export default Developer;
