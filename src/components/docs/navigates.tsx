import Icon from './icons'

const NavConsole = () => {
  return (
    <div>
      In the upper-left of the page, select <Icon name="Switch" />, then click <Icon name="Console" /> <b>Console</b>.
      <img src="/images/docs/navs/nav-console.png" alt="image" width="300"/>
    </div>
  );
}

const NavPAM = () => {
  return (
    <div>
      In the upper-left of the page, select <Icon name="Switch" />, then click <Icon name="pam" /> <b>PAM</b>.
      <img src="/images/docs/navs/nav-pam.png" alt="image" width="300"/>
    </div>
  );
}

const NavAudits = () => {
  return (
    <div>
      In the upper-left of the page, select <Icon name="switch" />, then click <Icon name="audit" /> <b>Audits</b>.
      <img src="/images/docs/navs/nav-audits.png" alt="image" width="300"/>
    </div>
  );
}

const NavWebTerminal = () => {
  return (
    <div>
      In the upper-right of the page, click <Icon name="square-terminal"/>.
      <img src="/images/docs/navs/nav-web-terminal.png" alt="image" width="350"/>
    </div>
  )

}

const NavSystemSettings = () => {
  return (
    <div>
      In the upper-right of the page, click <Icon name="settings"/>.
      <img src="/images/docs/navs/nav-settings.png" alt="image" width="350"/>
    </div>
  );
}

const ChangeOrg = () => {
  return (
    <div>
      In the upper-left of the page, click the current organization and switch from the dropdown.
      <img src="/images/docs/navs/switch-org.png" alt="image" width="350"/>
    </div>
  )
}

interface NavProps {
  name: "system-settings" | "console";
}

const navConfig = {
  'console': <NavConsole />,
  'pam': <NavPAM />,
  'audits': <NavAudits />,
  "web-terminal": <NavWebTerminal />,
  'system-settings': <NavSystemSettings />,
  'change-org': <ChangeOrg />,
}

const Nav: React.FC<NavProps> = ({ name }) => {
  return navConfig[name];
}

export default Nav;
