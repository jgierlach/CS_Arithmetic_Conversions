// main application components
import About from './views/About.vue'
import Contact from './views/Contact.vue'
import AllConversions from './views/AllConversions.vue'
import Home from './views/Home.vue'

// Conversion components
import BinaryAddition from './components/conversions/BinaryAddition.vue'
import BinaryHexDecimal from './components/conversions/BinaryHexDecimal.vue'
import IEEE754 from './components/conversions/IEEE754.vue'
import OnesAndTwosComp from './components/conversions/OnesAndTwosComp.vue'
import HexadecimalConversions from './components/conversions/HexadecimalConversions.vue'

// Explanation components
import BinaryAdditionExplanation from './components/explanations/BinaryAdditionExplanation.vue'
import BinaryToDecimalExplanation from './components/explanations/BinaryToDecimalExplanation.vue'
import DecimalToBinaryExplanation from './components/explanations/DecimalToBinaryExplanation.vue'
import DecimalToHexExplanation from './components/explanations/DecimalToHexExplanation.vue'
import HexToDecimalExplanation from './components/explanations/HexToDecimalExplanation.vue'
import IEEE754Explanation from './components/explanations/IEEE754Explanation.vue'
import OnesCompExplanation from './components/explanations/OnesCompExplanation.vue'
import TwosCompExplanation from './components/explanations/TwosCompExplanation.vue'

// Practice components
import BinaryAdditionPracticeProblems from './components/practice_problems/BinaryAdditionPracticeProblems.vue'
import BinaryPracticeProblems from './components/practice_problems/BinaryPracticeProblems.vue'
import HexadecimalPracticeProblems from './components/practice_problems/HexadecimalPracticeProblems.vue'
import IEEE754PracticeProblems from './components/practice_problems/IEEE754PracticeProblems.vue'
import OnesAndTwosCompPracticeProblems from './components/practice_problems/OnesTwosCompPracticeProblems.vue'

export const routes = [
  // main component routes
  {path: '/', component: Home},
  {path: '/all-conversions', component: AllConversions},
  {path: '/about', component: About},
  {path: '/contact', component: Contact},

  // conversion component routes
  {path: '/binary-addition', component: BinaryAddition},
  {path: '/binary-hex-decimal', component: BinaryHexDecimal},
  {path: '/ieee-754', component: IEEE754},
  {path: '/ones-and-twos-complement', component: OnesAndTwosComp},
  {path: '/hexadecimal-conversions', component: HexadecimalConversions},

  // explanation component routes
  {path: '/binary-addition-explanation', component: BinaryAdditionExplanation},
  {
    path: '/binary-to-decimal-explanation',
    component: BinaryToDecimalExplanation
  },
  {
    path: '/decimal-to-binary-explanation',
    component: DecimalToBinaryExplanation
  },
  {path: '/decimal-to-hex-explanation', component: DecimalToHexExplanation},
  {path: '/hex-to-decimal-explanation', component: HexToDecimalExplanation},
  {path: '/ieee754-explanation', component: IEEE754Explanation},
  {path: '/ones-complement-explanation', component: OnesCompExplanation},
  {path: '/twos-complement-explanation', component: TwosCompExplanation},

  // practice problems component routes
  {
    path: '/binary-addition-practice-problems',
    component: BinaryAdditionPracticeProblems
  },
  {path: '/binary-practice-problems', component: BinaryPracticeProblems},
  {
    path: '/hexadecimal-practice-problems',
    component: HexadecimalPracticeProblems
  },
  {path: '/ieee-754-practice-problems', component: IEEE754PracticeProblems},
  {
    path: '/ones-and-twos-complement-practice-problems',
    component: OnesAndTwosCompPracticeProblems
  },

  // default redirect to home page for any route that is not identified
  {path: '*', redirect: '/'}
]
