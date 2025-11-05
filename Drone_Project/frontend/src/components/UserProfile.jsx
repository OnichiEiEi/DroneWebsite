export default function UserProfile({ name, avatarUrl }) {
  return (
    <div className="flex items-center gap-4 p-4 max-w-lg">
      <img
        src={avatarUrl}
        className="w-12 h-12 rounded-full object-cover border-2 border-blue-500"
      />
      <div>
        <h2 className="text-xl font-semibold text-theme">{name}</h2> 
      </div>
    </div>
  );
}