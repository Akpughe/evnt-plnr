import React from 'react';
import Navbar from '../components/Navbar';
import { AuthContext } from '../utils/authContext';
import { useContext } from 'react';
import { Icon } from 'semantic-ui-react';
import styles from '../styles/Home.module.css';
import istyles from '../styles/Input.module.css';

const faq = () => {
  const { user } = useContext(AuthContext);
  return (
    <>
      <Navbar />
      <div className={styles.landing1}>
        <div className={styles.faq}>
          <h1>Privacy Policy</h1>
          <p>
            By using or accessing the Services in any manner, you acknowledge
            that you accept the practices and policies outlined in this Privacy
            Policy, and you hereby consent that we will collect, use, and share
            your information in the following ways. This is a Privacy Policy
            provided by Intelligent Crazy People, referred to as the “Venture”
            in our other agreements, also referred to as “we” and all
            derivations thereof throughout this Privacy Policy.
          </p>
          <h2>What does this Privacy Policy cover?</h2>
          <p>
            This Privacy Policy covers our treatment of personally identifiable
            information ("Personal Information") that we gather when you are
            accessing or using our Services, but not to the practices of
            companies we don’t own or control, or people that we don’t manage.
            We gather various types of Personal Information from our members, as
            explained in more detail below, and we use this Personal Information
            internally in connection with our Services, including to
            personalize, provide, and improve our services, to allow you to set
            up a member account and profile, to contact you and allow other
            members to contact you, to fulfill your requests for certain
            products and services, and to analyze how you use the Services. In
            certain cases, we may also share some Personal Information with
            third parties, but only as described below.
          </p>
          <p>
            We do not knowingly collect or solicit personal information from
            anyone under the age of 13. If you are under 13, please do not
            attempt to register for the Services or send any personal
            information about yourself to us. If we learn that we have collected
            personal information from a child under age 13, we will delete that
            information as quickly as possible. If you believe that a child
            under 13 may have provided us personal information, please contact
            us at{' '}
            <a href="mailto:contact@intcrzyppl.com">contact@intcrzyppl.com</a>.
          </p>
          <h2>
            Will Intelligent Crazy People ever change this Privacy Policy?
          </h2>
          <p>
            We’re constantly trying to improve our Services, so we may need to
            change this Privacy Policy from time to time as well, but we will
            alert you to changes by updating the services on the website,
            placing a notice on the Services, by sending you a notification
            within any email, and/or by some other means. Please note that if
            you’ve opted not to receive legal notice emails from us (or you
            haven’t provided us with your email address), those legal notices
            will still govern your use of the Services, and you are still
            responsible for reading and understanding them. If you use the
            Services after any changes to the Privacy Policy have been posted,
            that means you agree to all of the changes. Use of information we
            collect now is subject to the Privacy Policy in effect at the time
            such information is used or collected.
          </p>
          <h2>What Information does Intelligent Crazy People collect?</h2>
          <p>Information You Provide to Us:</p>
          <p>
            We receive and store any information you knowingly provide to us, as
            well as public information about members of our communities. For
            example, through the registration process and/or through your
            account settings, we may collect Personal Information such as your
            name, email address and third-party account credentials (for
            example, your Facebook credentials). If you provide your third-party
            account credentials to us or otherwise sign in to the Services
            through a third party site or service, you understand some content
            and/or information in those accounts (“Third Party Account
            Information”) may be transmitted into your account with us if you
            authorize such transmissions], and that Third Party Account
            Information transmitted to our Services is covered by this Privacy
            Policy. Certain information may be required to register with us or
            to take advantage of some of our features.
          </p>
          <p>
            We may communicate with you if you’ve provided us the means to do
            so. For example, if you’ve given us your email address, we may send
            you promotional email offers on behalf of other businesses, or email
            you about your use of the Services. Also, we may receive a
            confirmation when you open an email from us. This confirmation helps
            us make our communications with you more interesting and improve our
            services. If you do not want to receive communications from us,
            please email us at{' '}
            <a href="mailto:contact@intcrzyppl.com">contact@intcrzyppl.com</a>.
          </p>
          <h2>Information Collected Automatically</h2>
          <p>
            Whenever you interact with our Services, we automatically receive
            and record information on our server logs from your browser or
            device, which may include your IP address, geolocation data, device
            identification, “cookie” information, the type of browser and/or
            device you’re using to access our Services, and the page or feature
            you requested. “Cookies” are identifiers we transfer to your browser
            or device that allow us to recognize your browser or device and tell
            us how and when pages and features in our Services are visited and
            by how many people. You may be able to change the preferences on
            your browser or device to prevent or limit your device’s acceptance
            of cookies, but this may prevent you from taking advantage of some
            of our features. Our advertising partners may also transmit cookies
            to your browser or device, when you click on ads that appear on the
            Services. Also if you click on a link to a third party website or
            service, such third party may also transmit cookies to you. Again,
            this Privacy Policy does not cover the use of cookies by any third
            parties, and we aren’t responsible for their privacy policies and
            practices.
          </p>
          <p>
            When we collect the usage information described above, we only use
            this data in aggregate form, and not in a manner that would identify
            you personally. For example, this aggregate data can tell us how
            often members use a particular feature of the Services, and we can
            use that knowledge to make the Services interesting to as many
            members as possible.
          </p>
          <h2>
            Will Intelligent Crazy People Share Any of the Personal Information
            it Receives?
          </h2>
          <p>
            We may share your Personal Information with third parties as
            described in this section:
          </p>
          <p>
            We may disclose your identifiable Personal Information to our
            partners. We will not disclose your contact details. We may also
            provide aggregate usage information to our partners, who may use
            such information to understand how often and in what ways people use
            our Services, so that they, too, can provide you with an optimal
            online experience. However, we never disclose aggregate information
            to a partner in a manner that would identify you personally, as an
            individual.
          </p>
          <p>
            Affiliated Businesses: In certain situations, businesses or third
            party websites we’re affiliated with may sell or provide products or
            services to you through or in connection with the Services (either
            alone or jointly with us). You can recognize when an affiliated
            business is associated with such a transaction or service, and we
            will share your Personal Information with that affiliated business
            only to the extent that it is related to such transaction or
            service. One such service may include the ability for you to
            automatically transmit Third Party Account Information to your
            Services profile or to automatically transmit information in your
            Services profile to your third party account; for example, you may
            sign into your Intelligent Crazy People account using your Facebook
            account. We have no control over the policies and practices of third
            party websites or businesses as to privacy or anything else, so if
            you choose to take part in any transaction or service relating to an
            affiliated website or business, please review all such business’ or
            websites’ policies.
          </p>
          <p>
            Our Agents: We employ other companies and people to perform tasks on
            our behalf and need to share your information with them to provide
            products or services to you. Unless we tell you differently, our
            agents do not have any right to use the Personal Information we
            share with them beyond what is necessary to assist us.
          </p>
          <p>
            Member Profiles and Submissions: Certain member profile information,
            including your name, location, and any video or image content that
            such user has uploaded to the Services, may be displayed to other
            members to facilitate user interaction within the Services or
            address your request for our services.
          </p>
          <p>
            Business Transfers: We may choose to buy or sell assets. In these
            types of transactions, member information is typically one of the
            business assets that would be transferred. Also, if we (or our
            assets) are acquired, or if we cease operation or go through some
            other change of control, Personal Information could be one of the
            assets transferred to or acquired by a third party.
          </p>
          <p>
            Protection of Intelligent Crazy People and Others: We reserve the
            right to access, read, preserve, and disclose any information that
            we reasonably believe is necessary to comply with law or court
            order; enforce or apply any Terms of Use or other agreements; or
            protect the rights, property, or safety of Intelligent Crazy People,
            our contractors, our members, or others.
          </p>
          <h2>Is Personal Information about me secure?</h2>
          <p>
            Your account is protected by a password for your privacy and
            security. If you access your account via a third party site or
            service, you may have additional or different sign-on protections
            via that third party site or service. You must prevent unauthorized
            access to your account and Personal Information by selecting and
            protecting your password and/or other sign-on mechanism
            appropriately and limiting access to your computer or device and
            browser by signing off after you have finished accessing your
            account. We endeavor to protect the privacy of your account and
            other Personal Information we hold in our records, but
            unfortunately, we cannot guarantee complete security. Unauthorized
            entry or use, hardware or software failure, and other factors, may
            compromise the security of user information at any time.
          </p>
          <h2>What Personal Information can I access?</h2>
          <p>
            Through your account settings, you may access, and, in some cases,
            edit or delete the following information:
          </p>
          <ul>
            <li>name</li>
            <li>location you’re from</li>
            <li>current location</li>
            <li>visiting location</li>
            <li>education history</li>
            <li>employment history</li>
            <li>project and volunteering history</li>
            <li>profile headline</li>
            <li>website</li>
            <li>
              external accounts (facebook, twitter, dribbble, github, instagram)
            </li>
            <li>profile photo</li>
          </ul>
          <p>
            The information you can view, update, and delete may change as the
            Services change. If you have any questions about viewing or updating
            information we have on file about you, please contact us at{' '}
            <a href="mailto:contact@intcrzyppl.com">contact@intcrzyppl.com</a>.
          </p>
          <h2>What choices do I have?</h2>
          <p>
            You can always opt not to disclose information to us, but keep in
            mind some information may be needed to register with us or to take
            advantage of some of our features.
          </p>
          <p>
            You may be able to add, update, or delete information as explained
            above. When you update information, however, we may maintain a copy
            of the unrevised information in our records. You may request
            deletion of your account by contacting us at{' '}
            <a href="mailto:contact@intcrzyppl.com">contact@intcrzyppl.com</a>{' '}
            and we will disassociate your email address and Facebook account
            from any content or other information provided to us. Some
            information may remain in our records after your deletion of such
            information from your account. We may use any aggregated data
            derived from or incorporating your Personal Information after you
            update or delete it, but not in a manner that would identify you
            personally.
          </p>
          <h2>What if I have questions about this policy?</h2>
          <p>
            If you have any questions or concerns regarding our Privacy Policy,
            please send us a detailed message to{' '}
            <a href="mailto:contact@intcrzyppl.com">contact@intcrzyppl.com</a>,
            and we will try to resolve your concerns.
          </p>
        </div>
      </div>
    </>
  );
};

export default faq;
