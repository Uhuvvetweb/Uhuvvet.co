import {
  ArrowLeft,
  Users,
  Mail,
  Calendar,
  FileText,
  ChevronRight,
  Building2,
  BarChart3,
} from "lucide-react";
import {
  departments,
  departmentMembersCount,
  departmentPublications,
  departmentPolls,
} from "../../lib/mock-data";
import { useNavigate, useParams } from "react-router";

export function DepartmentsPage() {
  const { id } = useParams();
  const navigate = useNavigate();

  if (id) {
    const deptId = parseInt(id);
    const department = departments.find((d) => d.id === deptId);
    const memberInfo = departmentMembersCount[deptId];
    const publications = departmentPublications[deptId] || [];
    const polls = departmentPolls[deptId] || [];
    if (!department)
      return (
        <div className="p-8 text-center">
          <p className="text-muted-foreground">Birim bulunamadı.</p>
          <button
            onClick={() => navigate("/idari")}
            className="mt-4 text-main font-medium"
          >
            Geri Dön
          </button>
        </div>
      );

    return (
      <div className="pb-20 md:pb-4">
        <div className="max-w-2xl lg:max-w-3xl xl:max-w-4xl mx-auto px-4 py-4">
          {/* Back Button */}
          <button
            onClick={() => navigate("/idari")}
            className="flex items-center gap-2 text-foreground hover:text-main transition-colors mb-6"
          >
            <ArrowLeft className="w-5 h-5" />
            <span>İdari Birimlere Dön</span>
          </button>

          {/* Department Header */}
          <div className="bg-card border border-border rounded-lg p-6 md:p-8 mb-6 shadow-sm">
            <div className="flex items-start justify-between mb-6">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 rounded-lg bg-main/10 flex items-center justify-center">
                  <Building2 className="w-8 h-8 text-main" />
                </div>
                <div>
                  <h1 className="text-foreground text-2xl md:text-3xl font-bold">
                    {department.name}
                  </h1>
                  <p className="text-muted-foreground">
                    Kuruluş: {department.established}
                  </p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-6 border-t border-border">
              <div>
                <h3 className="text-foreground font-semibold mb-2">Hakkında</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {department.description}
                </p>
              </div>
              <div>
                <h3 className="text-foreground font-semibold mb-2">
                  Temel Sorumluluklar
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {department.responsibility}
                </p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Members Section */}
            {/* Azalar Section */}
            <div className="bg-card border border-border rounded-lg p-6 shadow-sm">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-foreground font-bold text-lg flex items-center gap-2">
                  <Users className="w-5 h-5 text-main" />
                  Azalar
                </h2>

                <span className="text-xs bg-main/10 text-main px-2 py-1 rounded-lg font-medium">
                  {memberInfo?.count ?? 0} Kişi
                </span>
              </div>

              {/* Avatar Stack */}
              <div className="flex items-center justify-between">
                <div className="flex -space-x-3">
                  {["A", "K", " B"].map((letter, i) => (
                    <div
                      key={i}
                      className="w-12 h-12 rounded-md bg-main text-white font-bold flex items-center justify-center ring-2 ring-card"
                    >
                      {letter}
                    </div>
                  ))}

                  {/* Remaining Count */}
                  {memberInfo?.count > 3 && (
                    <div className="w-12 h-12 rounded-md bg-accent text-foreground text-xs font-bold flex items-center justify-center ring-2 ring-card">
                      +{memberInfo.count - 3}
                    </div>
                  )}
                </div>

                <p className="text-right text-muted-foreground text-sm">
                  Bu birime kayıtlı toplam aza sayısı
                </p>
              </div>
            </div>

            {/* Publications Section */}
            <div className="bg-card border border-border rounded-lg p-6 shadow-sm">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-foreground font-bold text-lg flex items-center gap-2">
                  <FileText className="w-5 h-5 text-main" />
                  Duyuru ve Belgeler
                </h2>
              </div>
              <div className="space-y-3">
                {publications.map((pub) => (
                  <button
                    key={pub.id}
                    className="w-full flex items-start justify-between p-3 rounded-lg hover:bg-accent transition-colors border border-border text-left"
                  >
                    <div>
                      <p className="text-foreground font-medium text-sm mb-1">
                        {pub.title}
                      </p>
                      <div className="flex items-center gap-2 text-[10px] text-muted-foreground">
                        <Calendar className="w-3 h-3" />
                        <span>{pub.date}</span>
                        <span className="bg-accent px-1.5 py-0.5 rounded uppercase">
                          {pub.type}
                        </span>
                      </div>
                    </div>
                    <ChevronRight className="w-4 h-4 text-muted-foreground" />
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Active Consultation Rooms Section */}
          <div className="mt-6 bg-card border border-border rounded-lg p-6 shadow-sm">
            <div className="flex items-center justify-between mb-4">
              <div>
                <h2 className="text-foreground font-bold text-lg mb-1 flex items-center gap-2">
                  <Mail className="w-5 h-5 text-main" />
                  Aktif İstişare Odaları
                </h2>
                <p className="text-muted-foreground text-sm">
                  Devam eden mütalaa süreçleri ve yeni istişare başlatma
                </p>
              </div>
            </div>

            {/* Start New Consultation */}
            <div className="mb-6 p-4 rounded-lg bg-accent/50 border border-border">
              <div className="relative">
                <textarea
                  placeholder="Yeni istişare konusu oluşturun..."
                  className="w-full bg-card rounded-lg p-4 text-foreground placeholder-muted-foreground outline-none resize-none mb-3 min-h-[80px] border border-border"
                  rows={2}
                />
                <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
                  <div className="flex items-center gap-2">
                    <button className="px-3 py-1.5 bg-accent hover:bg-accent/80 text-foreground text-xs font-medium rounded-lg transition-colors flex items-center gap-2">
                      <Users className="w-3.5 h-3.5" />
                      Birim Seç
                    </button>
                    <button className="px-3 py-1.5 bg-accent hover:bg-accent/80 text-foreground text-xs font-medium rounded-lg transition-colors flex items-center gap-2">
                      <FileText className="w-3.5 h-3.5" />
                      Dosya Ekle
                    </button>
                  </div>
                  <button className="w-full sm:w-auto px-6 py-2 bg-main hover:bg-main/90 text-white font-bold rounded-lg transition-all flex items-center justify-center gap-2">
                    <Mail className="w-4 h-4" />
                    İstişare Başlat
                  </button>
                </div>
              </div>
            </div>

            {/* Active Consultations List */}
            <div className="space-y-3">
              <h3 className="text-foreground font-semibold text-sm mb-3">
                Devam Eden İstişareler
              </h3>

              {/* Example Active Consultation */}
              <div className="p-4 rounded-lg bg-main/5 border border-main/20 hover:border-main/40 transition-colors">
                <div className="flex items-start justify-between mb-2">
                  <h4 className="text-foreground font-medium text-sm flex-1">
                    2025 Eğitim Programı Değerlendirmesi
                  </h4>
                  <span className="text-xs bg-main/20 text-main px-2 py-1 rounded-lg font-medium ml-2">
                    Aktif
                  </span>
                </div>
                <p className="text-muted-foreground text-xs mb-3 line-clamp-2">
                  Yeni dönem eğitim programlarının içeriği, takvimi ve öğrenci
                  kapasitesi hakkında birimler arası istişare süreci...
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex -space-x-2">
                    <div className="w-6 h-6 rounded-lg bg-main text-white text-[10px] font-bold flex items-center justify-center ring-2 ring-card">
                      E
                    </div>
                    <div className="w-6 h-6 rounded-lg bg-blue-500 text-white text-[10px] font-bold flex items-center justify-center ring-2 ring-card">
                      İ
                    </div>
                    <div className="w-6 h-6 rounded-lg bg-green-500 text-white text-[10px] font-bold flex items-center justify-center ring-2 ring-card">
                      T
                    </div>
                  </div>
                  <div className="flex items-center gap-3 text-xs text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <Users className="w-3 h-3" />
                      12 katılımcı
                    </span>
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" />3 gün önce
                    </span>
                  </div>
                </div>
              </div>

              {/* Example Consultation 2 */}
              <div className="p-4 rounded-lg bg-accent border border-border hover:border-main/20 transition-colors">
                <div className="flex items-start justify-between mb-2">
                  <h4 className="text-foreground font-medium text-sm flex-1">
                    Web Platformu Güncelleme Önerileri
                  </h4>
                  <span className="text-xs bg-accent text-muted-foreground px-2 py-1 rounded-lg font-medium ml-2">
                    Beklemede
                  </span>
                </div>
                <p className="text-muted-foreground text-xs mb-3 line-clamp-2">
                  Platform kullanıcı deneyimi iyileştirmeleri ve yeni özellik
                  taleplerinin değerlendirilmesi...
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex -space-x-2">
                    <div className="w-6 h-6 rounded-lg bg-purple-500 text-white text-[10px] font-bold flex items-center justify-center ring-2 ring-card">
                      T
                    </div>
                    <div className="w-6 h-6 rounded-lg bg-orange-500 text-white text-[10px] font-bold flex items-center justify-center ring-2 ring-card">
                      İ
                    </div>
                  </div>
                  <div className="flex items-center gap-3 text-xs text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <Users className="w-3 h-3" />8 katılımcı
                    </span>
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" />1 hafta önce
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* ===================== OYLAMA BÖLÜMÜ ===================== */}
          {polls.length > 0 && (
            <div className="mt-6 space-y-6">
              {polls.map((poll) => {
                const totalVotes = poll.options.reduce(
                  (sum, opt) => sum + opt.votes,
                  0,
                );

                return (
                  <div
                    key={poll.id}
                    className="bg-card border border-border rounded-lg p-6 shadow-sm"
                  >
                    {/* Header */}
                    <div className="flex items-start gap-2 mb-4">
                      <BarChart3 className="w-5 h-5 text-main mt-0.5" />
                      <div>
                        <h2 className="text-foreground font-bold text-lg">
                          Heyet Oylaması
                        </h2>

                        <p className="text-xs text-muted-foreground">
                          {poll.createdBy} • {poll.createdAt} •{" "}
                          {poll.totalVotes}/{poll.participants} kişi oy verdi
                        </p>
                      </div>
                    </div>

                    {/* Question */}
                    <p className="text-foreground font-semibold mb-6">
                      {poll.question}
                    </p>

                    {/* Options */}
                    <div className="space-y-4">
                      {poll.options.map((option) => {
                        const percentage =
                          totalVotes === 0
                            ? 0
                            : Math.round((option.votes / totalVotes) * 100);

                        return (
                          <div
                            key={option.id}
                            className="border border-border rounded-lg p-4 hover:border-main/40 transition-colors"
                          >
                            {/* Option Title */}
                            <div className="flex justify-between mb-2">
                              <span className="text-sm font-medium text-foreground">
                                {option.text}
                              </span>

                              <span className="text-xs text-muted-foreground">
                                %{percentage}
                              </span>
                            </div>

                            {/* Progress */}
                            <div className="w-full h-2 bg-accent rounded-full overflow-hidden">
                              <div
                                className="h-full bg-main transition-all duration-500"
                                style={{ width: `${percentage}%` }}
                              />
                            </div>

                            {/* Avatar Stack */}
                            <div className="flex items-center justify-between mt-3">
                              <div className="flex -space-x-2">
                                {option.voterAvatars
                                  .slice(0, 5)
                                  .map((avatar, i) => (
                                    <div
                                      key={i}
                                      className="w-6 h-6 rounded-md bg-main text-white text-[10px] font-bold flex items-center justify-center ring-2 ring-card"
                                    >
                                      {avatar}
                                    </div>
                                  ))}

                                {option.voterAvatars.length > 5 && (
                                  <div className="w-6 h-6 rounded-md bg-accent text-foreground text-[10px] flex items-center justify-center ring-2 ring-card">
                                    +{option.voterAvatars.length - 5}
                                  </div>
                                )}
                              </div>

                              <span className="text-xs text-muted-foreground">
                                {option.votes} oy
                              </span>
                            </div>
                          </div>
                        );
                      })}
                    </div>

                    {/* Footer */}
                    <div className="mt-5 pt-4 border-t border-border flex justify-between text-xs text-muted-foreground">
                      <span>Süre: {poll.expiresAt}</span>

                      <span className="text-main font-medium">
                        Anonim Oylama
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
          {/* ===================== OYLAMA BÖLÜMÜ END ===================== */}

          {/* Contact Section */}
          <div className="mt-6 bg-card border border-border rounded-lg p-6 flex flex-col md:flex-row items-center justify-between gap-4 shadow-sm">
            <div>
              <h3 className="text-foreground font-semibold mb-1">
                İletişime Geçin
              </h3>
              <p className="text-muted-foreground text-sm">
                Bu birimle ilgili sorularınız veya başvurularınız için
              </p>
            </div>
            <a
              href={`mailto:${department.contact}`}
              className="flex items-center gap-2 px-6 py-3 bg-main text-white font-medium rounded-lg hover:bg-main/90 transition-colors w-full md:w-auto justify-center"
            >
              <Mail className="w-5 h-5" />
              <span>{department.contact}</span>
            </a>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="pb-20 md:pb-4">
      <div className="max-w-2xl lg:max-w-3xl xl:max-w-4xl mx-auto px-4 py-4">
        {/* Header */}
        <div className="mb-6">
          <h1 className="text-foreground text-2xl font-bold mb-2">
            İdari Birimler
          </h1>
          <p className="text-muted-foreground">
            Uhuvvet Community platformunun yönetim ve denetim organları.
          </p>
        </div>

        {/* Departments Grid */}
        <div className="grid grid-cols-1 gap-4">
          {departments.map((dept) => (
            <div
              key={dept.id}
              onClick={() => navigate(`/idari/${dept.id}`)}
              className="bg-card border border-border rounded-lg p-6 hover:border-main/50 transition-all cursor-pointer group shadow-sm flex items-start gap-4"
            >
              <div className="w-14 h-14 rounded-lg bg-main/10 flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform">
                <Building2 className="w-7 h-7 text-main" />
              </div>
              <div className="flex-1">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-foreground text-xl font-bold group-hover:text-main transition-colors">
                    {dept.name}
                  </h3>
                  <ChevronRight className="w-5 h-5 text-muted-foreground group-hover:translate-x-1 transition-transform" />
                </div>
                <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                  {dept.description}
                </p>
                <div className="flex items-center gap-4 text-xs font-medium text-muted-foreground">
                  <span className="flex items-center gap-1.5">
                    <Users className="w-3.5 h-3.5" />
                    {dept.members} Üye
                  </span>
                  <span className="flex items-center gap-1.5 text-main">
                    Detayları Gör
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
