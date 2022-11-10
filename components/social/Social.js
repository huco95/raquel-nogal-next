import LinkedinLink from "./LinkedinLink";
import MailLink from "./MailLink";
import TwitterLink from "./TwitterLink";

export default function Social({ className }) {
  return (
    <div className={className}>
      <TwitterLink />
      <LinkedinLink />
      <MailLink />
    </div>
  );
}
