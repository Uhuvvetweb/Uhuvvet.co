import {
  ArrowLeft,
  Moon,
  Sun,
  Bell,
  Lock,
  Globe,
  User,
  Palette,
} from "lucide-react";
import { useNavigate, useOutletContext } from "react-router";

interface ContextType {
  darkMode: boolean;
  toggleDarkMode: () => void;
}

export function SettingsPage() {
  const navigate = useNavigate();
  const { darkMode, toggleDarkMode } = useOutletContext<ContextType>();

  return (
    <div className="pb-20 md:pb-4">
      <div className="max-w-2xl lg:max-w-3xl xl:max-w-4xl mx-auto px-4 py-4">
        {/* Back Button */}
        <button
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 text-foreground hover:text-main transition-colors mb-4"
        >
          <ArrowLeft className="w-5 h-5" />
          <span>Geri Dön</span>
        </button>

        {/* Header */}
        <div className="mb-6">
          <h1 className="text-foreground text-2xl font-bold mb-2">Ayarlar</h1>
          <p className="text-muted-foreground text-sm">
            Hesap ve tercihlerinizi yönetin
          </p>
        </div>

        {/* Appearance Settings */}
        <div className="bg-card border border-border rounded-lg p-6 mb-4">
          <div className="flex items-center gap-3 mb-4">
            <Palette className="w-5 h-5 text-main" />
            <h2 className="text-foreground font-semibold text-lg">Görünüm</h2>
          </div>

          {/* Dark Mode Toggle */}
          <div className="flex items-center justify-between p-4 rounded-lg hover:bg-accent transition-colors">
            <div className="flex items-center gap-3">
              {darkMode ? (
                <Moon className="w-5 h-5 text-foreground" />
              ) : (
                <Sun className="w-5 h-5 text-foreground" />
              )}
              <div>
                <p className="text-foreground font-medium">Tema</p>
                <p className="text-muted-foreground text-sm">
                  {darkMode ? "Koyu Mod" : "Açık Mod"}
                </p>
              </div>
            </div>
            <button
              onClick={toggleDarkMode}
              aria-label="Toggle Dark Mode"
              className={`relative inline-flex h-6 w-11 items-center rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-main focus:ring-offset-2 ${
                darkMode ? "bg-main" : "bg-muted"
              }`}
            >
              <span
                className={`inline-block h-4 w-4 transform rounded-lg bg-white shadow-sm transition-transform ${
                  darkMode ? "translate-x-6" : "translate-x-1"
                }`}
              />
            </button>
          </div>
        </div>

        {/* Account Settings */}
        <div className="bg-card border border-border rounded-lg p-6 mb-4">
          <div className="flex items-center gap-3 mb-4">
            <User className="w-5 h-5 text-main" />
            <h2 className="text-foreground font-semibold text-lg">Hesap</h2>
          </div>

          <div className="space-y-2">
            <button className="w-full flex items-center justify-between p-4 rounded-lg hover:bg-accent transition-colors text-left">
              <div>
                <p className="text-foreground font-medium">Profil Bilgileri</p>
                <p className="text-muted-foreground text-sm">
                  Adınızı, fotoğrafınızı ve biyografinizi düzenleyin
                </p>
              </div>
              <span className="text-muted-foreground">›</span>
            </button>

            <button className="w-full flex items-center justify-between p-4 rounded-lg hover:bg-accent transition-colors text-left">
              <div>
                <p className="text-foreground font-medium">E-posta ve Şifre</p>
                <p className="text-muted-foreground text-sm">
                  Güvenlik ayarlarını yönetin
                </p>
              </div>
              <span className="text-muted-foreground">›</span>
            </button>
          </div>
        </div>

        {/* Privacy Settings */}
        <div className="bg-card border border-border rounded-lg p-6 mb-4">
          <div className="flex items-center gap-3 mb-4">
            <Lock className="w-5 h-5 text-main" />
            <h2 className="text-foreground font-semibold text-lg">
              Gizlilik ve Güvenlik
            </h2>
          </div>

          <div className="space-y-2">
            <button className="w-full flex items-center justify-between p-4 rounded-lg hover:bg-accent transition-colors text-left">
              <div>
                <p className="text-foreground font-medium">Gizlilik Ayarları</p>
                <p className="text-muted-foreground text-sm">
                  Kimler gönderi ve profilinizi görebilir
                </p>
              </div>
              <span className="text-muted-foreground">›</span>
            </button>

            <button className="w-full flex items-center justify-between p-4 rounded-lg hover:bg-accent transition-colors text-left">
              <div>
                <p className="text-foreground font-medium">Engellenenler</p>
                <p className="text-muted-foreground text-sm">
                  Engellediğiniz kullanıcılar
                </p>
              </div>
              <span className="text-muted-foreground">›</span>
            </button>
          </div>
        </div>

        {/* Notification Settings */}
        <div className="bg-card border border-border rounded-lg p-6 mb-4">
          <div className="flex items-center gap-3 mb-4">
            <Bell className="w-5 h-5 text-main" />
            <h2 className="text-foreground font-semibold text-lg">
              Bildirimler
            </h2>
          </div>

          <div className="space-y-2">
            <button className="w-full flex items-center justify-between p-4 rounded-lg hover:bg-accent transition-colors text-left">
              <div>
                <p className="text-foreground font-medium">Push Bildirimleri</p>
                <p className="text-muted-foreground text-sm">
                  Mobil ve masaüstü bildirimler
                </p>
              </div>
              <span className="text-muted-foreground">›</span>
            </button>

            <button className="w-full flex items-center justify-between p-4 rounded-lg hover:bg-accent transition-colors text-left">
              <div>
                <p className="text-foreground font-medium">
                  E-posta Bildirimleri
                </p>
                <p className="text-muted-foreground text-sm">
                  E-posta ile bildirim tercihleri
                </p>
              </div>
              <span className="text-muted-foreground">›</span>
            </button>
          </div>
        </div>

        {/* Language Settings */}
        <div className="bg-card border border-border rounded-lg p-6 mb-4">
          <div className="flex items-center gap-3 mb-4">
            <Globe className="w-5 h-5 text-main" />
            <h2 className="text-foreground font-semibold text-lg">
              Dil ve Bölge
            </h2>
          </div>

          <button className="w-full flex items-center justify-between p-4 rounded-lg hover:bg-accent transition-colors text-left">
            <div>
              <p className="text-foreground font-medium">Dil</p>
              <p className="text-muted-foreground text-sm">Türkçe</p>
            </div>
            <span className="text-muted-foreground">›</span>
          </button>
        </div>

        {/* About */}
        <div className="bg-card border border-border rounded-lg p-6">
          <h2 className="text-foreground font-semibold text-lg mb-4">
            Hakkında
          </h2>

          <div className="space-y-2">
            <button className="w-full flex items-center justify-between p-4 rounded-lg hover:bg-accent transition-colors text-left">
              <p className="text-foreground font-medium">Kullanım Şartları</p>
              <span className="text-muted-foreground">›</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
