
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
	data: Data | null;
}

interface Data {
	attributes: DataAttributes;
	id: number;
}

interface DataAttributes {
	url: string;
}
