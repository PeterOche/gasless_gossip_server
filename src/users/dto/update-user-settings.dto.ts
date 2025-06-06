import { IsBoolean, IsHexColor, IsNumber, IsOptional, IsString } from 'class-validator';

export class PrivacyPrefsDto {
  @IsOptional()
  @IsBoolean()
  showWalletAddress?: boolean;

  @IsOptional()
  @IsBoolean()
  showTransactionHistory?: boolean;
}

export class UpdateUserSettingsDto {
  @IsOptional()
  privacyPrefs?: PrivacyPrefsDto;
    @IsOptional() @IsBoolean() messages?: boolean;
    @IsOptional() @IsBoolean() transfers?: boolean;
    @IsOptional() @IsBoolean() mentions?: boolean;

  export class ThemePrefsDto {
    @IsOptional() @IsBoolean() darkMode?: boolean;
    @IsOptional() @IsHexColor() primaryColor?: string;
    @IsOptional() @IsNumber() fontSize?: number;
  }
  
  // Removed duplicate UpdateUserSettingsDto class definition
}