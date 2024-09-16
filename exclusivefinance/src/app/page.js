import Image from "next/image";
import Link from 'next/link';

export default function HomePage() {
  return (
    <div>
      <h1>Página De Login</h1>
      <nav>
        <ul>
          <li><Link href="/Principal">Pagina Principal</Link></li>
          <li><Link href="/contact"></Link></li>
        </ul>
      </nav>
    </div>
  );
}

//asdasdasdasdasdasd atualizou