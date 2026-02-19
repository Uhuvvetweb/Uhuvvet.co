import { X, Mic, MicOff, Volume2, Users, Hand } from "lucide-react";
import { useState } from "react";

interface VoiceRoomModalProps {
  roomName: string;
  participants: number;
  onClose: () => void;
}

export function VoiceRoomModal({
  roomName,
  participants,
  onClose,
}: VoiceRoomModalProps) {
  const [isMuted, setIsMuted] = useState(true);
  const [isHandRaised, setIsHandRaised] = useState(false);

  // Mock speakers - Risale-i Nur centered names
  const speakers = [
    {
      id: 1,
      name: "Hüseyin Efendi",
      avatar: "H",
      color: "#3b82f6",
      isSpeaking: true,
      isHost: true,
    },
    {
      id: 2,
      name: "Mustafa Bey",
      avatar: "M",
      color: "#8b5cf6",
      isSpeaking: false,
      isHost: false,
    },
    {
      id: 3,
      name: "Ahmed Bey",
      avatar: "A",
      color: "#10b981",
      isSpeaking: true,
      isHost: false,
    },
  ];

  // Mock listeners
  const listeners = [
    { id: 4, name: "Süleyman Bey", avatar: "S", color: "#ec4899" },
    { id: 5, name: "Zübeyir Bey", avatar: "Z", color: "#f59e0b" },
    { id: 6, name: "Tahir Bey", avatar: "T", color: "#ef4444" },
    { id: 7, name: "Bayram Bey", avatar: "B", color: "#06b6d4" },
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4">
      <div className="bg-card border border-border rounded-lg w-full max-w-2xl max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="sticky top-0 bg-card border-b border-border p-4 flex items-center justify-between">
          <div>
            <h2 className="text-foreground font-bold text-xl">{roomName}</h2>
            <p className="text-muted-foreground text-sm flex items-center gap-1">
              <Users className="w-4 h-4" />
              {participants} katılımcı
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-2 hover:bg-accent rounded-lg transition-colors"
          >
            <X className="w-5 h-5 text-foreground" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6">
          {/* Speakers Section */}
          <div className="mb-6">
            <h3 className="text-foreground font-semibold mb-4 flex items-center gap-2">
              <Mic className="w-5 h-5 text-main" />
              Konuşmacılar
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {speakers.map((speaker) => (
                <div
                  key={speaker.id}
                  className="flex flex-col items-center gap-2 p-4 rounded-lg bg-accent hover:bg-accent/80 transition-colors"
                >
                  <div className="relative">
                    <div
                      className="w-16 h-16 rounded-lg flex items-center justify-center text-white font-bold text-2xl"
                      style={{ backgroundColor: speaker.color }}
                    >
                      {speaker.avatar}
                    </div>
                    {speaker.isSpeaking && (
                      <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-main rounded-lg flex items-center justify-center animate-pulse">
                        <Volume2 className="w-3.5 h-3.5 text-white" />
                      </div>
                    )}
                    {speaker.isHost && (
                      <div className="absolute -top-1 -right-1 w-6 h-6 bg-yellow-500 rounded-lg flex items-center justify-center shadow-sm">
                        <span className="text-[10px]">👑</span>
                      </div>
                    )}
                  </div>
                  <div className="text-center">
                    <p className="text-foreground font-medium text-sm">
                      {speaker.name}
                    </p>
                    {speaker.isHost && (
                      <p className="text-main text-xs">Moderatör</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Listeners Section */}
          <div className="mb-6">
            <h3 className="text-foreground font-semibold mb-4 flex items-center gap-2">
              <Users className="w-5 h-5 text-main" />
              Dinleyiciler
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {listeners.map((listener) => (
                <div
                  key={listener.id}
                  className="flex items-center gap-2 p-2 rounded-lg bg-accent hover:bg-accent/80 transition-colors"
                >
                  <div
                    className="w-8 h-8 rounded-lg flex items-center justify-center text-white font-bold text-sm flex-shrink-0"
                    style={{ backgroundColor: listener.color }}
                  >
                    {listener.avatar}
                  </div>
                  <p className="text-foreground text-xs truncate">
                    {listener.name}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Footer Controls */}
        <div className="sticky bottom-0 bg-card border-t border-border p-4">
          <div className="flex items-center justify-center gap-3">
            <button
              onClick={() => setIsHandRaised(!isHandRaised)}
              className={`p-3 rounded-lg transition-all ${
                isHandRaised
                  ? "bg-main text-white"
                  : "bg-accent text-foreground hover:bg-accent/80"
              }`}
            >
              <Hand className="w-5 h-5" />
            </button>

            <button
              onClick={() => setIsMuted(!isMuted)}
              className={`p-3 rounded-lg transition-all ${
                isMuted
                  ? "bg-muted text-foreground hover:bg-muted/80"
                  : "bg-main text-white hover:bg-main/90"
              }`}
            >
              {isMuted ? (
                <MicOff className="w-5 h-5" />
              ) : (
                <Mic className="w-5 h-5" />
              )}
            </button>

            <button
              onClick={onClose}
              className="px-6 py-3 bg-red-500 hover:bg-red-600 text-white font-medium rounded-lg transition-colors"
            >
              Odadan Ayrıl
            </button>
          </div>

          <div className="mt-3 text-center">
            <p className="text-muted-foreground text-xs">
              {isHandRaised
                ? "✋ Eliniz kaldırıldı"
                : isMuted
                  ? "🔇 Mikrofonunuz kapalı"
                  : "🎤 Mikrofonunuz açık"}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
