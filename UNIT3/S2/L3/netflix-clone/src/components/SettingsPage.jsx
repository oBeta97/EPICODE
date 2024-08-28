import MembershipSection from "./MembershipSection";
import PlanRow from "./PlanRow";
import SettingsDoubleLink from "./SettingsDoubleLink";
import SettingsTitle from "./SettingsTitle";

const SettingsPage = (props) => {
    return (

        <div className="container">

            {/* <!-- TITLE --> */}
            <SettingsTitle />

            {/* <!-- MEMBERSHIP & BILLING --> */}
            <div className="row border-bottom border-secondary-subtle py-2 my-2">
                <div className="col-12 col-md-3">
                    <h6 className="text-secondary">MEMBERSHIP & BILLING</h6>
                    <button type="button" className="btn bg-secondary-subtle shadow-sm">Cancel Membership</button>
                </div>

                <div className="col">

                    <MembershipSection primary link="#" linkText="Change account email" description="student@strive.school" />

                    <MembershipSection link="#" linkText="Change password" description="password: *******" />

                    <MembershipSection link="#" linkText="Change phone number" description="+44 123 4567 890" />

                    <hr />

                    <MembershipSection
                        link="#"
                        secondaryLink="#"
                        linkText="Update payment info"
                        secondaryLinkText="Billing details"
                        description="admin@strive.school"
                        iconType="bi bi-paypal"
                    />


                    <hr />

                    <MembershipSection
                        link="#"
                        secondaryLink="#"
                        linkText="Redeem gift card or promo code"
                        secondaryLinkText="Where to buy gift cards"
                        description=""
                    />
                </div>
            </div>

            {/* <!-- PLAN DETAILS --> */}
            <div className="row border-bottom border-secondary-subtle py-2 my-2 align-items-center">
                <PlanRow />
            </div>

            {/* <!-- SETTINGS --> */}
            <div className="row border-bottom border-secondary-subtle py-2 my-2">
                <div className="col-12 col-md-3">
                    <h6 className="text-secondary">SETTINGS</h6>
                </div>

                <div className="col">
                    <MembershipSection linkOnly link="#" linkText="Parental controls" />

                    <MembershipSection linkOnly link="#" linkText="Test participation" />

                    <MembershipSection linkOnly link="#" linkText="Manage download devices" />

                    <MembershipSection linkOnly link="#" linkText="active a device" />

                    <MembershipSection linkOnly link="#" linkText="Recent device streaming activity" />

                    <MembershipSection linkOnly link="#" linkText="Sign out of all devices" />

                </div>
            </div>

            {/* <!-- MY PROFILE --> */}
            <div className="row py-2 mt-2 mb-5">
                <div className="col-12 col-md-3">
                    <h6 className="text-secondary">MY PROFILE</h6>
                </div>

                <div className="col">

                    <MembershipSection
                        showUserIcon
                        primary
                        link="#"
                        description="student@strive.school"
                        linkText="Sign out of all devices"
                        secondaryLink="#"
                        secondaryLinkText="Add profile email"
                    />


                    <SettingsDoubleLink links={["Language", "Viev activity", "Playback settings", "Ratings", "Subtitles appeareance"]} />

                </div>
            </div>

        </div>


    );
};


export default SettingsPage;