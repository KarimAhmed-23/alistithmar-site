
export interface ReportTab {
	ReportFile: ReportFile[];
	TabTitle: string;
	id: number;
}

interface ReportFile {
	FileName: string;
	asset: MetaImage;
	id: number;
}

interface MetaImage {
	data: Data;
}

interface Data {
	attributes: DataAttributes;
	id: number;
}

interface DataAttributes {
	url: string;
}

export interface SEO {
	id: number;
	keywords: string;
	metaDescription: string;
	metaSocial: MetaSocial[];
	metaTitle: string;
}

export interface MetaSocial {
	description: string;
	id: number;
	image: {
		data: {
			attributes: {
				url: string;
			}
		}
	};
	socialNetwork: string;
	title: string;
}