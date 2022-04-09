export interface ICountry {
	area: number,
	capital: string,
	name: string,
	population: number,
	flags: string,
	region: string
}

export interface IBadge {
    color: Color;
    type: BadgeLabel;
    value: Number
}

export const enum Color {
	Primary = 'primary',
	Secondary = 'secondary',
	Success = 'success',
	Danger = 'danger',
	Warning = 'warning',
	Info = 'info',
	Light = 'light',
	Dark = 'dark'
}

export type BadgeLabel = 'area' | 'population';