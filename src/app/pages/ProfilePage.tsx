import {
  ArrowLeft,
  Calendar,
  Users,
  Building2,
  MapPin,
  Link as LinkIcon,
  Settings,
} from "lucide-react";
import { TimePostCard } from "../components/TimePostCard";
import { posts, communities, departments, users } from "../../lib/mock-data";
import { useNavigate, useParams, Link } from "react-router";

export function ProfilePage() {
  const { userId } = useParams();
  const navigate = useNavigate();

  // Use current user (id: 1) if no userId is provided
  const targetId = userId ? parseInt(userId) : 1;
  const user = users.find((u) => u.id === targetId) || users[0];

  // User's posts
  const userPosts = posts.filter((p) => p.userId === targetId);

  // User's communities (mock - first 3)
  const userCommunities = communities.slice(0, 3);

  // User's departments (mock - first 2)
  const userDepartments = departments.slice(0, 2);

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

        {/* Profile Header */}
        <div className="bg-card border border-border rounded-lg overflow-hidden mb-4 shadow-sm">
          {/* Cover Image */}
          <div
            className="h-32 sm:h-48 w-full transition-colors duration-200"
            style={{ background: user.coverColor }}
          />

          {/* Profile Info */}
          <div className="p-6">
            <div className="flex items-start justify-between mb-4">
              <div
                className="w-20 h-20 sm:w-24 sm:h-24 rounded-lg flex items-center justify-center text-white font-bold text-3xl sm:text-4xl -mt-12 sm:-mt-16 border-4 border-card shadow-lg"
                style={{ backgroundColor: user.avatarColor }}
              >
                {user.avatar}
              </div>
              <div className="flex gap-2">
                {targetId === 1 && (
                  <>
                    <Link
                      to="/settings"
                      className="p-2 bg-accent hover:bg-accent/80 text-foreground rounded-lg transition-colors"
                    >
                      <Settings className="w-5 h-5" />
                    </Link>
                    <button className="px-4 py-2 bg-main hover:bg-main/90 text-white font-medium rounded-lg transition-colors">
                      Düzenle
                    </button>
                  </>
                )}
              </div>
            </div>

            <div className="mb-4">
              <h1 className="text-foreground text-2xl font-bold mb-1">
                {user.name}
              </h1>
              <p className="text-muted-foreground text-sm mb-3">
                @{user.username}
              </p>
              {user.bio && (
                <p className="text-foreground mb-4 leading-relaxed">
                  {user.bio}
                </p>
              )}

              <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                {user.location && (
                  <div className="flex items-center gap-1">
                    <MapPin className="w-4 h-4" />
                    <span>{user.location}</span>
                  </div>
                )}
                {user.website && (
                  <div className="flex items-center gap-1">
                    <LinkIcon className="w-4 h-4" />
                    <a
                      href={`https://${user.website}`}
                      className="text-main hover:underline"
                    >
                      {user.website}
                    </a>
                  </div>
                )}
                <div className="flex items-center gap-1">
                  <Calendar className="w-4 h-4" />
                  <span>Katılım: {user.joinedDate}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Communities Section */}
        <div className="bg-card border border-border rounded-lg p-6 mb-4 shadow-sm">
          <h2 className="text-foreground font-bold text-lg mb-4 flex items-center gap-2">
            <Users className="w-5 h-5 text-main" />
            Üye Olduğu Topluluklar ({userCommunities.length})
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {userCommunities.map((community) => (
              <button
                key={community.id}
                onClick={() => navigate(`/community/${community.id}`)}
                className="flex items-center gap-3 p-3 rounded-lg hover:bg-accent transition-colors border border-border text-left group"
              >
                <div
                  className="w-12 h-12 rounded-lg flex items-center justify-center text-xl flex-shrink-0 group-hover:scale-105 transition-transform"
                  style={{ backgroundColor: community.iconColor + "20" }}
                >
                  {community.icon}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-foreground text-sm font-semibold truncate group-hover:text-main transition-colors">
                    {community.name}
                  </p>
                  <p className="text-muted-foreground text-xs">
                    {community.members.toLocaleString()} üye
                  </p>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Departments Section */}
        <div className="bg-card border border-border rounded-lg p-6 mb-4 shadow-sm">
          <h2 className="text-foreground font-bold text-lg mb-4 flex items-center gap-2">
            <Building2 className="w-5 h-5 text-main" />
            Hizmet Birimleri ({userDepartments.length})
          </h2>
          <div className="space-y-3">
            {userDepartments.map((department) => (
              <button
                key={department.id}
                onClick={() => navigate(`/idari/${department.id}`)}
                className="w-full flex items-center gap-3 p-4 rounded-lg hover:bg-accent transition-colors border border-border text-left group"
              >
                <div className="w-12 h-12 rounded-lg bg-main/10 flex items-center justify-center text-main flex-shrink-0 group-hover:scale-105 transition-transform">
                  <Building2 className="w-6 h-6" />
                </div>
                <div className="flex-1">
                  <p className="text-foreground font-semibold group-hover:text-main transition-colors">
                    {department.name}
                  </p>
                  <p className="text-muted-foreground text-sm line-clamp-1">
                    {department.description}
                  </p>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* User Posts */}
        <div className="mb-4">
          <h2 className="text-foreground font-bold text-lg mb-4 px-1">
            Paylaşımlar ({userPosts.length})
          </h2>
          {userPosts.length > 0 ? (
            <div className="space-y-3">
              {userPosts.map((post) => (
                <TimePostCard
                  key={post.id}
                  {...post}
                  onClick={() => navigate(`/time/${post.id}`)}
                  onProfileClick={(userId) => navigate(`/profile/${userId}`)}
                />
              ))}
            </div>
          ) : (
            <div className="bg-card border border-border rounded-lg p-12 text-center shadow-sm">
              <p className="text-muted-foreground">
                Henüz bir paylaşım bulunmuyor.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
