interface FooterProps {
  textRights: string
}
const Footer = (footerProps: FooterProps) => {
  const { textRights } = footerProps

  return (
    <div
      className="relative flex items-center justify-center pb-3 px-3 mt-1 text-center z-10"
    >
      © {(new Date()).getFullYear()} Erick Cestari. {textRights}.
    </div>
  );
};

export default Footer;
