const GoogleLogo = ({ width, height }: { width: string, height: string }) => {

	const style: React.CSSProperties = {
		minWidth: width,
		minHeight: height,
		backgroundImage: 'url(https://companieslogo.com/img/orig/GOOG-0ed88f7c.png?t=1633218227)',
		backgroundRepeat: 'no-repeat',
		backgroundSize: 'contain'
	}

	return (
		<div style={style}>
		</div>);
}

export default GoogleLogo;