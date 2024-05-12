import React from "react";
import "../styles/InviteNote.css";

function InviteNote() {
  return (
      <section id="invite-note">
          <div className="invite-note-wrapper">
              <h5>An Invitation from:</h5>
              <h2>Mrs. & Mr. Syed Wajid</h2>

              {/* <h5 className="address mb-3">
                    Proprietor: Mohammed Ali Jewellers,
                    <br /> Shroff Bazaar, Adoni.
                </h5> */}
              <h5 className="address mb-3">
                  #31, 1<sup>st</sup> Floor, 1<sup>st</sup> Cross,
                  <br /> Ankappa Block, J.C. Nagar,
                  <br /> Bangalore - 560 006.
              </h5>
              <p className="address">
                  Contact: <br />
                  +91 98802 77838,
                  <br />
                  +91 84534 34555.
              </p>
          </div>
      </section>
  );
}

export default InviteNote;
